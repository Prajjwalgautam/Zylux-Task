import { getProducts, deleteProduct } from "@/app/actions";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Define Product interface
interface Product {
  id: string;
  name: string;
  description?: string;
  image?: string;
  availableStock: number;
  categoryId: string;
}

// Fetch and display product list
export async function ProductList() {
  const products: Product[] = await getProducts(); // ✅ Explicitly typed

  return (
    <ul className="space-y-4">
      {products.map((product) => (
        <li key={product.id} className="flex items-center justify-between bg-card p-4 rounded-lg">
          <div>
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-sm text-gray-500">Stock: {product.availableStock}</p>
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name || "Product Image"}
              className="w-16 h-16 object-cover rounded mt-2"
            />
          </div>
          <div className="space-x-2">
            <Link href={`/dashboard/products/${product.id}/edit`}>
              <Button variant="outline">Edit</Button>
            </Link>
            {/* Ensure form action is properly structured */}
            <form action={async (formData) => {
              "use server"; // Ensure it's a server action
              await deleteProduct(formData);
            }} className="inline">
              <input type="hidden" name="id" value={product.id} />
              <Button variant="destructive" type="submit">
                Delete
              </Button>
            </form>
          </div>
        </li>
      ))}
    </ul>
  );
}

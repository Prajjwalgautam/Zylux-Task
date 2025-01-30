import { DataTable } from "@/components/data-table"
import { productColumns } from "./columns"

const data = [
  {
    id: "1",
    name: "Product 1",
    price: 19.99,
    category: "Electronics",
    stock: 50,
  },
  {
    id: "2",
    name: "Product 2",
    price: 29.99,
    category: "Clothing",
    stock: 100,
  },
  // Add more sample data as needed
]

export default function ProductsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Products</h1>
      <DataTable columns={productColumns} data={data} />
    </div>
  )
}


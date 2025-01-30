import { getCategories, deleteCategory } from "@/app/actions"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export async function CategoryList() {
  const categories = await getCategories()

  return (
    <ul className="space-y-4">
      {categories.map((category) => (
        <li key={category.id} className="flex items-center justify-between bg-card p-4 rounded-lg">
          <div>
            <h3 className="font-semibold">{category.name}</h3>
            <img
              src={category.image || "/placeholder.svg"}
              alt={category.name}
              className="w-16 h-16 object-cover rounded mt-2"
            />
          </div>
          <div className="space-x-2">
            <Link href={`/dashboard/categories/${category.id}/edit`}>
              <Button variant="outline">Edit</Button>
            </Link>
            <form action={deleteCategory} className="inline">
              <input type="hidden" name="id" value={category.id} />
              <Button variant="destructive" type="submit">
                Delete
              </Button>
            </form>
          </div>
        </li>
      ))}
    </ul>
  )
}


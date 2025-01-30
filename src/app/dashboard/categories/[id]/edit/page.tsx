import { getCategory } from "@/app/actions"
import { CategoryEditForm } from "@/components/category-edit-form"

export default async function EditCategoryPage({ params }: { params: { id: string } }) {
  const category = await getCategory(params.id)

  if (!category) {
    return <div>Category not found</div>
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Edit Category</h1>
      <CategoryEditForm category={category} />
    </div>
  )
}


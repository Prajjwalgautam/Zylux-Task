import { Suspense } from "react"
import { CategoryList } from "@/components/category-list"
import { CategoryForm } from "@/components/category-form"

export default function CategoriesPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Categories</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold mb-4">Add New Category</h2>
          <CategoryForm />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Existing Categories</h2>
          <Suspense fallback={<div>Loading categories...</div>}>
            <CategoryList />
          </Suspense>
        </div>
      </div>
    </div>
  )
}


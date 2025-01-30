"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { updateCategory } from "@/app/actions"

export function CategoryEditForm({ category }: { category: { id: string; name: string; image: string } }) {
  const [name, setName] = useState(category.name)
  const [image, setImage] = useState(category.image)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await updateCategory({ id: category.id, name, image })
    router.push("/dashboard/categories")
    router.refresh()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <Label htmlFor="image">Image URL</Label>
        <Input id="image" value={image} onChange={(e) => setImage(e.target.value)} required />
      </div>
      <Button type="submit">Update Category</Button>
    </form>
  )
}


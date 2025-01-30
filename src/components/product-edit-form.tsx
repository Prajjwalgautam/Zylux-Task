"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { updateProduct } from "@/app/actions"

export function ProductEditForm({
  product,
  categories,
}: {
  product: { id: string; name: string; description: string; image: string; availableStock: number; categoryId: string }
  categories: { id: string; name: string }[]
}) {
  const [name, setName] = useState(product.name)
  const [description, setDescription] = useState(product.description)
  const [image, setImage] = useState(product.image)
  const [availableStock, setAvailableStock] = useState(product.availableStock.toString())
  const [categoryId, setCategoryId] = useState(product.categoryId)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await updateProduct({
      id: product.id,
      name,
      description,
      image,
      availableStock: Number.parseInt(availableStock),
      categoryId,
    })
    router.push("/dashboard/products")
    router.refresh()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
      </div>
      <div>
        <Label htmlFor="image">Image URL</Label>
        <Input id="image" value={image} onChange={(e) => setImage(e.target.value)} required />
      </div>
      <div>
        <Label htmlFor="availableStock">Available Stock</Label>
        <Input
          id="availableStock"
          type="number"
          value={availableStock}
          onChange={(e) => setAvailableStock(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="category">Category</Label>
        <Select value={categoryId} onValueChange={setCategoryId}>
          <SelectTrigger>
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category.id} value={category.id}>
                {category.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Button type="submit">Update Product</Button>
    </form>
  )
}


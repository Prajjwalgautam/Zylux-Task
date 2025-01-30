"use server"

import { revalidatePath } from "next/cache"
import { db } from "@/lib/db"

export async function getCategories() {
  return db.category.findMany()
}

export async function getCategory(id: string) {
  return db.category.findUnique({ where: { id } })
}

export async function createCategory({ name, image }: { name: string; image: string }) {
  await db.category.create({ data: { name, image } })
  revalidatePath("/dashboard/categories")
}

export async function updateCategory({ id, name, image }: { id: string; name: string; image: string }) {
  await db.category.update({ where: { id }, data: { name, image } })
  revalidatePath("/dashboard/categories")
}

export async function deleteCategory(formData: FormData) {
  const id = formData.get("id") as string
  await db.category.delete({ where: { id } })
  revalidatePath("/dashboard/categories")
}

export async function getProducts() {
  return db.product.findMany({ include: { category: true } })
}

export async function getProduct(id: string) {
  return db.product.findUnique({ where: { id }, include: { category: true } })
}

export async function createProduct({
  name,
  description,
  image,
  initialStock,
  categoryId,
}: {
  name: string
  description: string
  image: string
  initialStock: number
  categoryId: string
}) {
  await db.product.create({
    data: {
      name,
      description,
      image,
      initialStock,
      availableStock: initialStock,
      categoryId,
    },
  })
  revalidatePath("/dashboard/products")
}

export async function updateProduct({
  id,
  name,
  description,
  image,
  availableStock,
  categoryId,
}: {
  id: string
  name: string
  description: string
  image: string
  availableStock: number
  categoryId: string
}) {
  await db.product.update({
    where: { id },
    data: { name, description, image, availableStock, categoryId },
  })
  revalidatePath("/dashboard/products")
}

export async function deleteProduct(formData: FormData) {
  const id = formData.get("id") as string
  await db.product.delete({ where: { id } })
  revalidatePath("/dashboard/products")
}


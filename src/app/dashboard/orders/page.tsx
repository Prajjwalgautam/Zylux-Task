import { DataTable } from "@/components/data-table"
import { orderColumns } from "./columns"

const data = [
  {
    id: "1",
    customer: "John Doe",
    status: "Processing",
    total: 99.99,
    date: "2023-06-01",
  },
  {
    id: "2",
    customer: "Jane Smith",
    status: "Shipped",
    total: 149.99,
    date: "2023-05-30",
  },
  // Add more sample data as needed
]

export default function OrdersPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Orders</h1>
      <DataTable columns={orderColumns} data={data} />
    </div>
  )
}


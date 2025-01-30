import { DataTable } from "@/components/data-table"
import { userColumns } from "./columns"

const data = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    role: "Customer",
    lastLogin: "2023-06-01",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Admin",
    lastLogin: "2023-05-30",
  },
  // Add more sample data as needed
]

export default function UsersPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Users</h1>
      <DataTable columns={userColumns} data={data} />
    </div>
  )
}


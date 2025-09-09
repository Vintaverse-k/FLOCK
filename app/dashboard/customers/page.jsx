"use client"

import { useState } from "react"
import { CustomersHeader } from "@/components/customers/customers-header"
import { CustomersStats } from "@/components/customers/customers-stats"
import { CustomersTable } from "@/components/customers/customers-table"
import { AddCustomerModal } from "@/components/customers/add-customer-modal"

export default function CustomersPage() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [customers, setCustomers] = useState([
    {
      id: "CUS-1001",
      fullName: "Andi Saputra",
      email: "andisaputra@gmail.com",
      phone: "+62 812 3456",
      company: "IndoTech Ltd",
      country: "ID",
      city: "Jakarta",
      shipments: 52,
      avatar: "AS",
    },
    {
      id: "CUS-1002",
      fullName: "Budi Santoso",
      email: "budisantoso@gmail.com",
      phone: "+62 813 4567",
      company: "TechSolutions Inc",
      country: "ID",
      city: "Bandung",
      shipments: 35,
      avatar: "BS",
    },
  ])

  const handleAddCustomer = (newCustomer) => {
    setCustomers((prev) => [newCustomer, ...prev])
  }

  return (
    <div className="space-y-6">
      <CustomersHeader onAddCustomer={() => setIsAddModalOpen(true)} />
      <CustomersStats customers={customers} />
      <CustomersTable customers={customers} />

      <AddCustomerModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddCustomer={handleAddCustomer}
      />
    </div>
  )
}

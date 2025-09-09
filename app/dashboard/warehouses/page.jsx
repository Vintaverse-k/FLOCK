"use client"

import { useState } from "react"
import { WarehousesHeader } from "@/components/warehouses/warehouses-header"
import { WarehousesStats } from "@/components/warehouses/warehouses-stats"
import { WarehousesTable } from "@/components/warehouses/warehouses-table"
import { AddWarehouseModal } from "@/components/warehouses/add-warehouse-modal"

export default function WarehousesPage() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [warehouses, setWarehouses] = useState([
    {
      id: "WH-001",
      name: "Jakarta Central Hub",
      location: "Jakarta, ID",
      capacity: 5000,
      used: 78,
      status: "Active",
      manager: "Andi Saputra",
      avatar: "AS",
    },
    {
      id: "WH-002",
      name: "Tokyo Distribution Centre",
      location: "Tokyo, JP",
      capacity: 8500,
      used: 85,
      status: "Active",
      manager: "Hiroshi Tanaka",
      avatar: "HT",
    },
  ])

  const handleAddWarehouse = (newWarehouse) => {
    setWarehouses((prev) => [newWarehouse, ...prev])
  }

  return (
    <div className="space-y-6">
      <WarehousesHeader onAddWarehouse={() => setIsAddModalOpen(true)} />
      <WarehousesStats warehouses={warehouses} />
      <WarehousesTable warehouses={warehouses} />

      <AddWarehouseModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddWarehouse={handleAddWarehouse}
      />
    </div>
  )
}

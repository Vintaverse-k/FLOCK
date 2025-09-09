"use client"

import { useState } from "react"
import CarriersHeader from "@/components/carriers/carriers-header"
import CarriersStats from "@/components/carriers/carriers-stats"
import CarriersTable from "@/components/carriers/carriers-table"
import { AddCarrierModal } from "@/components/carriers/add-carrier-modal"

export default function CarriersPage() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [carriers, setCarriers] = useState([
    {
      id: "CAR-001",
      name: "DHL Express",
      type: "International",
      avgDeliveryTime: "3.2 days",
      activeShipments: 152,
      contactPerson: "Budi Santoso",
      status: "Active",
    },
    {
      id: "CAR-002",
      name: "FedEx",
      type: "Worldwide",
      avgDeliveryTime: "3.5 days",
      activeShipments: 175,
      contactPerson: "Alice Johnson",
      status: "Active",
    },
  ])

  const handleAddCarrier = (newCarrier) => {
    setCarriers((prev) => [newCarrier, ...prev])
  }

  return (
    <div className="flex-1 space-y-4">
      <CarriersHeader onAddCarrier={() => setIsAddModalOpen(true)} />
      <CarriersStats carriers={carriers} />
      <CarriersTable carriers={carriers} />

      <AddCarrierModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddCarrier={handleAddCarrier}
      />
    </div>
  )
}

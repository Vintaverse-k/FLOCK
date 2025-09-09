"use client"

import { useState } from "react"
import { ShipmentsHeader } from "@/components/shipments/shipments-header"
import { ShipmentsStats } from "@/components/shipments/shipments-stats"
import { ShipmentsTable } from "@/components/shipments/shipments-table"
import { AddShipmentModal } from "@/components/shipments/add-shipment-modal"

const initialShipments = [
  {
    id: "SHP-1001",
    origin: "Jakarta, ID",
    destination: "Singapore, SG",
    carrier: "DHL Express",
    status: "In Transit",
    eta: "2025-08-15 14:30",
    weight: "12.4",
    cost: "85.00",
  },
  {
    id: "SHP-1002",
    origin: "Tokyo, JP",
    destination: "Seoul, KR",
    carrier: "FedEx",
    status: "Delivered",
    eta: "2025-08-10 09:00",
    weight: "8.7",
    cost: "120.00",
  },
  {
    id: "SHP-1003",
    origin: "London, UK",
    destination: "Berlin, DE",
    carrier: "UPS",
    status: "Delayed",
    eta: "2025-08-20 11:15",
    weight: "15.0",
    cost: "90.00",
  },
  {
    id: "SHP-1004",
    origin: "New York, US",
    destination: "Toronto, CA",
    carrier: "USPS",
    status: "In Transit",
    eta: "2025-08-12 16:45",
    weight: "5.3",
    cost: "50.00",
  },
  {
    id: "SHP-1005",
    origin: "Sydney, AU",
    destination: "Melbourne, AU",
    carrier: "Aramex",
    status: "Delivered",
    eta: "2025-08-08 08:30",
    weight: "2.0",
    cost: "70.00",
  },
  {
    id: "SHP-1006",
    origin: "Mumbai, IN",
    destination: "Dubai, AE",
    carrier: "Blue Dart",
    status: "In Transit",
    eta: "2025-08-18 13:10",
    weight: "3.5",
    cost: "75.00",
  },
  {
    id: "SHP-1007",
    origin: "Rio de Janeiro, BR",
    destination: "Sao Paulo, BR",
    carrier: "Jadlog",
    status: "Delayed",
    eta: "2025-08-22 10:00",
    weight: "7.8",
    cost: "60.00",
  },
  {
    id: "SHP-1008",
    origin: "Cairo, EG",
    destination: "Alexandria, EG",
    carrier: "Aramex",
    status: "Delivered",
    eta: "2025-08-14 15:20",
    weight: "6.4",
    cost: "80.00",
  },
]

export default function ShipmentsPage() {
  const [shipments, setShipments] = useState(initialShipments)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)

  const handleAddShipment = (newShipment) => {
    setShipments((prev) => [newShipment, ...prev])
  }

  return (
    <div className="space-y-6">
      <ShipmentsHeader onAddShipment={() => setIsAddModalOpen(true)} />
      <ShipmentsStats shipments={shipments} />
      <ShipmentsTable shipments={shipments} />
      <AddShipmentModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddShipment={handleAddShipment}
      />
    </div>
  )
}

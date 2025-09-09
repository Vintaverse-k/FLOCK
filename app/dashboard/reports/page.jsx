"use client"

import { useState } from "react"
import ReportsHeader from "@/components/reports/reports-header"
import ShipmentPerformanceChart from "@/components/dashboard/shipment-performance-chart"
import ReportsStats from "@/components/reports/reports-stats"
import RecentShipmentActivity from "@/components/dashboard/recent-shipment-activity"
import { AddShipmentModal } from "@/components/shipments/add-shipment-modal"

export default function ReportsPage() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)

  const handleAddShipment = (newShipment) => {
    console.log("New shipment added from reports:", newShipment)
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <ReportsHeader onAddShipment={() => setIsAddModalOpen(true)} />
      <ReportsStats />
      <div className="grid gap-4 md:grid-cols-1">
        <ShipmentPerformanceChart />
      </div>
      <RecentShipmentActivity />

      <AddShipmentModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} onAdd={handleAddShipment} />
    </div>
  )
}

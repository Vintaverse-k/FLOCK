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
    <div className="flex-1 space-y-4">
      <ReportsHeader onAddShipment={() => setIsAddModalOpen(true)} />
     
      <div className="grid gap-4 md:grid-cols-1">
        <ShipmentPerformanceChart />
         <ReportsStats />
      </div>
      <RecentShipmentActivity />

      <AddShipmentModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} onAdd={handleAddShipment} />
    </div>
  )
}

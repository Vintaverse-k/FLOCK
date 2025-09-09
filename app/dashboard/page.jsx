"use client"

import { useState } from "react"
import { DashboardStats } from "@/components/dashboard/dashboard-stats"
import ShipmentPerformanceChart from "@/components/dashboard/shipment-performance-chart"
import  ShipmentsByRegionChart  from "@/components/dashboard/shipments-by-region-chart"
import RecentShipmentActivity from "@/components/dashboard/recent-shipment-activity"
import { Button } from "@/components/ui/button"
import { AddShipmentModal } from "@/components/shipments/add-shipment-modal"

export default function DashboardPage() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)

  const handleAddShipment = (newShipment) => {
    // This would typically update a global state or make an API call
    console.log("New shipment added:", newShipment)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <div className="flex items-center space-x-3">
          <Button variant="outline" className="border-gray-200 bg-transparent">
            Generate Report
          </Button>
          <Button onClick={() => setIsAddModalOpen(true)} className="bg-red-500 hover:bg-red-600 text-white">
            Add New Shipment
          </Button>
        </div>
      </div>

      {/* Stats */}
      <DashboardStats />

      {/* Charts */}
      {/* Charts */}
<div className="flex gap-6 overflow-x-auto">
  <ShipmentPerformanceChart />
  <ShipmentsByRegionChart />
</div>


      {/* Recent Activity */}
      <RecentShipmentActivity />

      {/* Modal with corrected prop name */}
      <AddShipmentModal 
        isOpen={isAddModalOpen} 
        onClose={() => setIsAddModalOpen(false)} 
        onAddShipment={handleAddShipment}  // <-- Corrected prop name
      />
    </div>
  )
}

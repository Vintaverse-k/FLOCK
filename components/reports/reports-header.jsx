"use client"

import { Button } from "@/components/ui/button"

export default function ReportsHeader({ onAddShipment }) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-3xl font-bold tracking-tight">Reports</h2>
      <div className="flex items-center space-x-2">
        <Button className="bg-red-500 hover:bg-red-600">Generate Report</Button>
        <Button onClick={onAddShipment} className="bg-red-500 hover:bg-red-600">
          Add New Shipment
        </Button>
      </div>
    </div>
  )
}

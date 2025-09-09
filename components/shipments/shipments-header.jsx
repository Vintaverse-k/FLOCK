"use client"

import { Button } from "@/components/ui/button"
import { Download, Plus } from "lucide-react"

export function ShipmentsHeader({ onAddShipment }) {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-semibold text-gray-900">Shipments</h1>
      <div className="flex items-center space-x-3">
        <Button variant="outline" className="border-gray-200 bg-transparent">
          <Download className="h-4 w-4 mr-2" />
          Export/Import
        </Button>
        <Button onClick={onAddShipment} className="bg-red-500 hover:bg-red-600 text-white">
          <Plus className="h-4 w-4 mr-2" />
          Add New Shipment
        </Button>
      </div>
    </div>
  )
}

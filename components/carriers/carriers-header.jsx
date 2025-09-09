"use client"

import { Button } from "@/components/ui/button"

export default function CarriersHeader({ onAddCarrier }) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-3xl font-bold tracking-tight">Carriers</h2>
      <div className="flex items-center space-x-2">
        <Button variant="outline">Export</Button>
        <Button onClick={onAddCarrier} className="bg-red-500 hover:bg-red-600">
          Add New Carrier
        </Button>
      </div>
    </div>
  )
}

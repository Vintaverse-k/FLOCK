"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function AddShipmentModal({ isOpen, onClose, onAddShipment }) {
  const [formData, setFormData] = useState({
    origin: "",
    destination: "",
    carrier: "",
    status: "In Transit",
    weight: "",
    cost: "",
  })

  const carriers = ["DHL Express", "FedEx", "UPS", "USPS", "Aramex", "Blue Dart", "Jadlog"]
  const statuses = ["In Transit", "Delivered", "Delayed", "Pending"]

  const handleSubmit = (e) => {
    e.preventDefault()

    // Generate new shipment ID
    const newId = `SHP-${Math.floor(Math.random() * 9000) + 1000}`

    // Generate ETA (random date within next 30 days)
    const futureDate = new Date()
    futureDate.setDate(futureDate.getDate() + Math.floor(Math.random() * 30) + 1)
    const eta = futureDate.toISOString().slice(0, 16).replace("T", " ")

    const newShipment = {
      id: newId,
      origin: formData.origin,
      destination: formData.destination,
      carrier: formData.carrier,
      status: formData.status,
      eta: eta,
      weight: formData.weight,
      cost: formData.cost,
    }

    onAddShipment(newShipment)

    // Reset form
    setFormData({
      origin: "",
      destination: "",
      carrier: "",
      status: "In Transit",
      weight: "",
      cost: "",
    })

    onClose()
  }

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-gray-900">Add New Shipment</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="origin" className="text-sm font-medium text-gray-700">
                Origin
              </Label>
              <Input
                id="origin"
                placeholder="e.g., Jakarta, ID"
                value={formData.origin}
                onChange={(e) => handleInputChange("origin", e.target.value)}
                className="border-gray-200 focus:border-red-500 focus:ring-red-500"
                required
              />
            </div>
            <div>
              <Label htmlFor="destination" className="text-sm font-medium text-gray-700">
                Destination
              </Label>
              <Input
                id="destination"
                placeholder="e.g., Singapore, SG"
                value={formData.destination}
                onChange={(e) => handleInputChange("destination", e.target.value)}
                className="border-gray-200 focus:border-red-500 focus:ring-red-500"
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="carrier" className="text-sm font-medium text-gray-700">
              Carrier
            </Label>
            <Select value={formData.carrier} onValueChange={(value) => handleInputChange("carrier", value)} required>
              <SelectTrigger className="border-gray-200 focus:border-red-500 focus:ring-red-500">
                <SelectValue placeholder="Select carrier" />
              </SelectTrigger>
              <SelectContent>
                {carriers.map((carrier) => (
                  <SelectItem key={carrier} value={carrier}>
                    {carrier}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="status" className="text-sm font-medium text-gray-700">
              Status
            </Label>
            <Select value={formData.status} onValueChange={(value) => handleInputChange("status", value)}>
              <SelectTrigger className="border-gray-200 focus:border-red-500 focus:ring-red-500">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {statuses.map((status) => (
                  <SelectItem key={status} value={status}>
                    {status}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="weight" className="text-sm font-medium text-gray-700">
                Weight (kg)
              </Label>
              <Input
                id="weight"
                type="number"
                step="0.1"
                placeholder="0.0"
                value={formData.weight}
                onChange={(e) => handleInputChange("weight", e.target.value)}
                className="border-gray-200 focus:border-red-500 focus:ring-red-500"
                required
              />
            </div>
            <div>
              <Label htmlFor="cost" className="text-sm font-medium text-gray-700">
                Cost (USD)
              </Label>
              <Input
                id="cost"
                type="number"
                step="0.01"
                placeholder="0.00"
                value={formData.cost}
                onChange={(e) => handleInputChange("cost", e.target.value)}
                className="border-gray-200 focus:border-red-500 focus:ring-red-500"
                required
              />
            </div>
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="border-gray-200 bg-transparent">
              Cancel
            </Button>
            <Button type="submit" className="bg-red-500 hover:bg-red-600 text-white">
              Add Shipment
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function AddCarrierModal({ isOpen, onClose, onAddCarrier }) {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    deliveryTime: "",
    contactPerson: "",
    status: "Active",
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    const newCarrier = {
      id: `CAR-${Math.floor(Math.random() * 1000)}`,
      name: formData.name,
      type: formData.type,
      avgDeliveryTime: formData.deliveryTime,
      activeShipments: 0,
      contactPerson: formData.contactPerson,
      status: formData.status,
    }

    onAddCarrier(newCarrier)
    setFormData({ name: "", type: "", deliveryTime: "", contactPerson: "", status: "Active" })
    onClose()
  }

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">Add New Carrier</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <Label htmlFor="name">Carrier Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Enter carrier name"
                required
              />
            </div>

            <div>
              <Label htmlFor="type">Type *</Label>
              <Select value={formData.type} onValueChange={(value) => handleChange("type", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select carrier type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="International">International</SelectItem>
                  <SelectItem value="Domestic">Domestic</SelectItem>
                  <SelectItem value="Worldwide">Worldwide</SelectItem>
                  <SelectItem value="Global">Global</SelectItem>
                  <SelectItem value="National">National</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="deliveryTime">Average Delivery Time *</Label>
              <Input
                id="deliveryTime"
                value={formData.deliveryTime}
                onChange={(e) => handleChange("deliveryTime", e.target.value)}
                placeholder="e.g., 3.2 days"
                required
              />
            </div>

            <div>
              <Label htmlFor="contactPerson">Contact Person *</Label>
              <Input
                id="contactPerson"
                value={formData.contactPerson}
                onChange={(e) => handleChange("contactPerson", e.target.value)}
                placeholder="Enter contact person name"
                required
              />
            </div>

            <div>
              <Label htmlFor="status">Status</Label>
              <Select value={formData.status} onValueChange={(value) => handleChange("status", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" className="bg-red-500 hover:bg-red-600 text-white">
              Add Carrier
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

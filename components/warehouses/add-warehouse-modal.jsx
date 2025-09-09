"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function AddWarehouseModal({ isOpen, onClose, onAddWarehouse }) {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    capacity: "",
    manager: "",
    status: "Active",
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    const newWarehouse = {
      id: `WH-${Math.floor(Math.random() * 1000)}`,
      name: formData.name,
      location: formData.location,
      capacity: Number.parseInt(formData.capacity),
      used: Math.floor(Math.random() * Number.parseInt(formData.capacity)),
      status: formData.status,
      manager: formData.manager,
      avatar: formData.manager
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase(),
    }

    onAddWarehouse(newWarehouse)
    setFormData({ name: "", location: "", capacity: "", manager: "", status: "Active" })
    onClose()
  }

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">Add New Warehouse</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <Label htmlFor="name">Warehouse Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Enter warehouse name"
                required
              />
            </div>

            <div>
              <Label htmlFor="location">Location *</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => handleChange("location", e.target.value)}
                placeholder="Enter location"
                required
              />
            </div>

            <div>
              <Label htmlFor="capacity">Capacity *</Label>
              <Input
                id="capacity"
                type="number"
                value={formData.capacity}
                onChange={(e) => handleChange("capacity", e.target.value)}
                placeholder="Enter capacity"
                required
              />
            </div>

            <div>
              <Label htmlFor="manager">Manager Name *</Label>
              <Input
                id="manager"
                value={formData.manager}
                onChange={(e) => handleChange("manager", e.target.value)}
                placeholder="Enter manager name"
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
                  <SelectItem value="Maintenance">Maintenance</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" className="bg-red-500 hover:bg-red-600 text-white">
              Add Warehouse
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

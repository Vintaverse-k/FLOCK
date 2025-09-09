"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function AddTrackingModal({ isOpen, onClose, onAdd }) {
  const [formData, setFormData] = useState({
    customerName: "",
    originCity: "",
    destinationCity: "",
    carrier: "",
    status: "Pending",
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    // Generate tracking number and order ID
    const trackingNo = `TRK-${Math.floor(Math.random() * 90000) + 10000}`
    const orderId = `ORD-${Math.floor(Math.random() * 9000) + 1000}`

    const newTracking = {
      trackingNo,
      orderId,
      customerName: formData.customerName,
      originCity: formData.originCity,
      destinationCity: formData.destinationCity,
      carrier: formData.carrier,
      status: formData.status,
    }

    onAdd(newTracking)
    setFormData({
      customerName: "",
      originCity: "",
      destinationCity: "",
      carrier: "",
      status: "Pending",
    })
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Add New Tracking</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="customerName">Customer Name</Label>
              <Input
                id="customerName"
                value={formData.customerName}
                onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="carrier">Carrier</Label>
              <Select value={formData.carrier} onValueChange={(value) => setFormData({ ...formData, carrier: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select carrier" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="FedEx">FedEx</SelectItem>
                  <SelectItem value="UPS">UPS</SelectItem>
                  <SelectItem value="DHL">DHL</SelectItem>
                  <SelectItem value="USPS">USPS</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="originCity">Origin City</Label>
              <Input
                id="originCity"
                value={formData.originCity}
                onChange={(e) => setFormData({ ...formData, originCity: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="destinationCity">Destination City</Label>
              <Input
                id="destinationCity"
                value={formData.destinationCity}
                onChange={(e) => setFormData({ ...formData, destinationCity: e.target.value })}
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="status">Status</Label>
            <Select value={formData.status} onValueChange={(value) => setFormData({ ...formData, status: value })}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Pending">Pending</SelectItem>
                <SelectItem value="In Transit">In Transit</SelectItem>
                <SelectItem value="Delivered">Delivered</SelectItem>
                <SelectItem value="Delayed">Delayed</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" className="bg-red-500 hover:bg-red-600">
              Add Tracking
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

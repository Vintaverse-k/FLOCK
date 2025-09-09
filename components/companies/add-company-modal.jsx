"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function AddCompanyModal({ isOpen, onClose, onAddCompany }) {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    url: "",
    category: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    const newCompany = {
      id: Math.floor(Math.random() * 10000),
      name: formData.name,
      address: formData.address,
      phone: formData.phone,
      url: formData.url,
      category: formData.category,
      avatar: formData.name.charAt(0).toUpperCase(),
    }

    onAddCompany(newCompany)
    setFormData({ name: "", address: "", phone: "", url: "", category: "" })
    onClose()
  }

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">Add New Company</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <Label htmlFor="name">Company Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Enter company name"
                required
              />
            </div>

            <div>
              <Label htmlFor="address">Address *</Label>
              <Input
                id="address"
                value={formData.address}
                onChange={(e) => handleChange("address", e.target.value)}
                placeholder="Enter company address"
                required
              />
            </div>

            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder="Enter phone number"
                required
              />
            </div>

            <div>
              <Label htmlFor="url">Website URL</Label>
              <Input
                id="url"
                value={formData.url}
                onChange={(e) => handleChange("url", e.target.value)}
                placeholder="https://example.com"
              />
            </div>

            <div>
              <Label htmlFor="category">Category *</Label>
              <Select value={formData.category} onValueChange={(value) => handleChange("category", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Consumer Electronics">Consumer Electronics</SelectItem>
                  <SelectItem value="Software & Services">Software & Services</SelectItem>
                  <SelectItem value="Internet Services">Internet Services</SelectItem>
                  <SelectItem value="E-commerce">E-commerce</SelectItem>
                  <SelectItem value="Social Media">Social Media</SelectItem>
                  <SelectItem value="Streaming">Streaming</SelectItem>
                  <SelectItem value="Technology">Technology</SelectItem>
                  <SelectItem value="Entertainment">Entertainment</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" className="bg-red-500 hover:bg-red-600 text-white">
              Add Company
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

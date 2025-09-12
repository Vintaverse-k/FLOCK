"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, MoreHorizontal, ChevronLeft, ChevronRight } from "lucide-react"

const getStatusColor = (status) => {
  switch (status) {
    case "In Transit":
      return "border-yellow-400 text-yellow-800 bg-transparent"
    case "Delivered":
      return "border-green-400 text-green-800 bg-transparent"
    case "Delayed":
      return "border-red-400 text-red-800 bg-transparent"
    default:
      return "border-gray-400 text-gray-800 bg-transparent"
  }
}


export function ShipmentsTable({ shipments }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [showFilters, setShowFilters] = useState(false)
  const [statusFilter, setStatusFilter] = useState("all")
  const [dateRange, setDateRange] = useState("all")
  const itemsPerPage = 8

  const filteredShipments = shipments.filter((shipment) => {
    const matchesSearch =
      shipment.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      shipment.origin.toLowerCase().includes(searchTerm.toLowerCase()) ||
      shipment.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
      shipment.carrier.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || shipment.status === statusFilter

    return matchesSearch && matchesStatus
  })

  const totalPages = Math.ceil(filteredShipments.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentShipments = filteredShipments.slice(startIndex, endIndex)

  const resetFilters = () => {
    setStatusFilter("all")
    setDateRange("all")
  }

  return (
    <Card className="border-gray-200">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-lg font-semibold text-gray-900">Shipments Table Data</CardTitle>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-64 border-gray-200 focus:border-red-500 focus:ring-red-500"
            />
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowFilters(!showFilters)}
            className="border-gray-200 bg-transparent"
          >
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
      </CardHeader>

      {/* Filters Panel */}
      {showFilters && (
        <div className="px-6 pb-4 border-b border-gray-200">
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-900">Filters</h3>
              <Button variant="ghost" size="sm" onClick={resetFilters} className="text-red-500 hover:text-red-600">
                Reset
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Status</label>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="border-gray-200">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="In Transit">In Transit</SelectItem>
                    <SelectItem value="Delivered">Delivered</SelectItem>
                    <SelectItem value="Delayed">Delayed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Date</label>
                <Select value={dateRange} onValueChange={setDateRange}>
                  <SelectTrigger className="border-gray-200">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="week">This Week</SelectItem>
                    <SelectItem value="month">This Month</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Date Range</label>
                <Input
                  type="text"
                  placeholder="August 14 - August 15, 2025"
                  className="border-gray-200 focus:border-red-500 focus:ring-red-500"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr
                className="border-b border-gray-200"
                style={{ backgroundColor: "#F6F8FA", borderBottom: "1px solid #DFE1E7" }}
              >
                <th className="py-3 px-4">
                  <input type="checkbox" />
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Shipment ID</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Origin</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Destination</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Carrier</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">ETA Date & Time</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Weight (kg)</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Cost (USD)</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm"></th>
              </tr>
            </thead>
            <tbody>
              {currentShipments.map((shipment) => (
                <tr key={shipment.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <input type="checkbox" />
                  </td>
                  <td className="py-4 px-4 text-sm font-medium text-gray-900">{shipment.id}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{shipment.origin}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{shipment.destination}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{shipment.carrier}</td>
                  <td className="py-4 px-4">
                    <Badge className={`${getStatusColor(shipment.status)} border`}>
  {shipment.status}
</Badge>

                  </td>
                  <td className="py-4 px-4 text-sm text-gray-600">{shipment.eta}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{shipment.weight}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{shipment.cost}</td>
                  <td className="py-4 px-4">
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6">
          <p className="text-sm text-gray-600">
            Showing {startIndex + 1} to {Math.min(endIndex, filteredShipments.length)} of {filteredShipments.length}{" "}
            results
          </p>
          <div className="flex items-center space-x-2">
            <p className="text-sm text-gray-600">Per page</p>
            <select className="border border-gray-200 rounded px-2 py-1 text-sm">
              <option value="8">8</option>
              <option value="16">16</option>
              <option value="24">24</option>
            </select>
            <div className="flex items-center space-x-1 ml-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="border-gray-200"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentPage(page)}
                  className={
                    currentPage === page ? "bg-red-500 hover:bg-red-600 text-white" : "border-gray-200 bg-transparent"
                  }
                >
                  {page}
                </Button>
              ))}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="border-gray-200"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

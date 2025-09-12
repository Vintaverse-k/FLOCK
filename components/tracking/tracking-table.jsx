"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, MoreHorizontal, ChevronLeft, ChevronRight } from "lucide-react"

const getStatusColor = (status) => {
  switch (status) {
    case "Delivered":
      return "border border-green-500 text-green-500 bg-transparent"
    case "In Transit":
      return "border border-blue-500 text-blue-500 bg-transparent"
    case "Pending":
      return "border border-yellow-500 text-yellow-500 bg-transparent"
    case "Delayed":
      return "border border-red-500 text-red-500 bg-transparent"
    default:
      return "border border-gray-300 text-gray-500 bg-transparent"
  }
}


export function TrackingTable({ trackingData = [] }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 8

  const filteredTracking = trackingData.filter(
    (item) =>
      item.trackingNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.originCity.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.destinationCity.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.carrier.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const totalPages = Math.ceil(filteredTracking.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentTracking = filteredTracking.slice(startIndex, endIndex)

  return (
    <Card className="border-gray-200">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-lg font-semibold text-gray-900">Carriers Data Table</CardTitle>
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
          <Button variant="outline" size="sm" className="border-gray-200 bg-transparent">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr
                className="border-b border-gray-200"
                style={{ backgroundColor: "#F6F8FA", borderBottom: "1px solid #DFE1E7" }}
              >
                <th className="py-3 px-4 flex items-center justify-center">
                  <input type="checkbox" className="w-4 h-4" />
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Tracking No.</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Order ID</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Customer Name</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Origin City</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Destination City</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Carrier</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm"></th>
              </tr>
            </thead>

            <tbody>
              {currentTracking.map((item) => (
                <tr key={item.trackingNo} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4 flex items-center justify-center">
                    <input type="checkbox" className="w-4 h-4" />
                  </td>

                  <td className="py-4 px-4 text-sm font-medium text-gray-900">{item.trackingNo}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{item.orderId}</td>
                  <td className="py-4 px-4 text-sm text-gray-900">{item.customerName}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{item.originCity}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{item.destinationCity}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{item.carrier}</td>
                  <td className="py-4 px-4">
                    <Badge className={`${getStatusColor(item.status)}`}>{item.status}</Badge>

                  </td>
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
            Showing {startIndex + 1} to {Math.min(endIndex, filteredTracking.length)} of {filteredTracking.length}{" "}
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

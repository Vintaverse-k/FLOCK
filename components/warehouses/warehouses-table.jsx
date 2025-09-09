"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Search, Filter, MoreHorizontal, ChevronLeft, ChevronRight } from "lucide-react"

const warehouses = [
  {
    id: "WH-001",
    name: "Jakarta Central Hub",
    location: "Jakarta, ID",
    capacity: 5000,
    used: 78,
    status: "Active",
    manager: {
      name: "Andi Saputra",
      avatar: "/placeholder-user.png",
    },
  },
  {
    id: "WH-002",
    name: "Tokyo Distribution Centre",
    location: "Tokyo, JP",
    capacity: 8500,
    used: 85,
    status: "Active",
    manager: {
      name: "Hiroshi Tanaka",
      avatar: "/placeholder-user.png",
    },
  },
  {
    id: "WH-003",
    name: "New York Logistics Centre",
    location: "New York, US",
    capacity: 10500,
    used: 90,
    status: "Active",
    manager: {
      name: "Emily Johnson",
      avatar: "/placeholder-user.png",
    },
  },
  {
    id: "WH-004",
    name: "London Fulfillment Centre",
    location: "London, UK",
    capacity: 8700,
    used: 82,
    status: "Maintenance",
    manager: {
      name: "James Smith",
      avatar: "/placeholder-user.png",
    },
  },
  {
    id: "WH-005",
    name: "Berlin Storage Facility",
    location: "Berlin, DE",
    capacity: 7400,
    used: 88,
    status: "Maintenance",
    manager: {
      name: "Lena Müller",
      avatar: "/placeholder-user.png",
    },
  },
  {
    id: "WH-006",
    name: "Sydney Warehouse",
    location: "Sydney, AU",
    capacity: 6300,
    used: 75,
    status: "Active",
    manager: {
      name: "Oliver Brown",
      avatar: "/placeholder-user.png",
    },
  },
  {
    id: "WH-007",
    name: "Mumbai Distribution Hub",
    location: "Mumbai, IN",
    capacity: 4500,
    used: 80,
    status: "Maintenance",
    manager: {
      name: "Priya Sharma",
      avatar: "/placeholder-user.png",
    },
  },
  {
    id: "WH-008",
    name: "Toronto Supply Depot",
    location: "Toronto, CA",
    capacity: 11000,
    used: 92,
    status: "Active",
    manager: {
      name: "Michael Lee",
      avatar: "/placeholder-user.png",
    },
  },
]

const getStatusColor = (status) => {
  switch (status) {
    case "Active":
      return "bg-green-100 text-green-800"
    case "Maintenance":
      return "bg-orange-100 text-orange-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export function WarehousesTable() {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 8

  const filteredWarehouses = warehouses.filter(
    (warehouse) =>
      warehouse.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      warehouse.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      warehouse.manager.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const totalPages = Math.ceil(filteredWarehouses.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentWarehouses = filteredWarehouses.slice(startIndex, endIndex)

  return (
    <Card className="border-gray-200">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-lg font-semibold text-gray-900">Warehouses Table Data</CardTitle>
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
          <Button variant="outline" size="sm" className="border-gray-200 bg-transparent">
            Sort by
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Warehouse ID</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Name</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Location</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Capacity (ft²)</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Used (%)</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Manager</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm"></th>
              </tr>
            </thead>
            <tbody>
              {currentWarehouses.map((warehouse) => (
                <tr key={warehouse.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4 text-sm font-medium text-gray-900">{warehouse.id}</td>
                  <td className="py-4 px-4 text-sm font-medium text-gray-900">{warehouse.name}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{warehouse.location}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{warehouse.capacity.toLocaleString()}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <Progress value={warehouse.used} className="w-16 h-2" />
                      <span className="text-sm text-gray-600 min-w-[30px]">{warehouse.used}%</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <Badge className={`${getStatusColor(warehouse.status)} border-0`}>{warehouse.status}</Badge>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center">
                      <Avatar className="h-8 w-8 mr-3">
                        <AvatarImage src={warehouse.manager.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {warehouse.manager.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-gray-900">{warehouse.manager.name}</span>
                    </div>
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
            Showing {startIndex + 1} to {Math.min(endIndex, filteredWarehouses.length)} of {filteredWarehouses.length} results
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

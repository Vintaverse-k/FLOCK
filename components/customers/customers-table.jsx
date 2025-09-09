"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Filter, MoreHorizontal, ChevronLeft, ChevronRight } from "lucide-react"

export function CustomersTable({ customers }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 8

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.city.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentCustomers = filteredCustomers.slice(startIndex, endIndex)

  return (
    <Card className="border-gray-200">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-lg font-semibold text-gray-900">Customers Table Data</CardTitle>
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
                <th className="py-3 px-4">
                  <input type="checkbox" />
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Customer ID</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Full Name</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Email</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Phone</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Company</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Country</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">City</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Shipments</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm"></th>
              </tr>
            </thead>
            <tbody>
              {currentCustomers.map((customer) => (
                <tr key={customer.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <input type="checkbox" />
                  </td>
                  <td className="py-4 px-4 text-sm font-medium text-gray-900">{customer.id}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center">
                      <Avatar className="h-8 w-8 mr-3">
                        <AvatarImage src={customer.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {customer.avatar ||
                            customer.fullName
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium text-gray-900">{customer.fullName}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-600">{customer.email}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{customer.phone}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{customer.company}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{customer.country}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{customer.city}</td>
                  <td className="py-4 px-4 text-sm font-medium text-gray-900">{customer.shipments}</td>
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
            Showing {startIndex + 1} to {Math.min(endIndex, filteredCustomers.length)} of {filteredCustomers.length}{" "}
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

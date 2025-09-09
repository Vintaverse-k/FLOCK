"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, MoreHorizontal, ChevronLeft, ChevronRight } from "lucide-react"

const companies = [
  {
    id: 1,
    name: "Apple Inc.",
    address: "1 Apple Park Way, Cupertino, CA 95014",
    phone: "(704) 555-0129",
    url: "https://www.apple.com/",
    category: "Consumer Electronics",
    categoryColor: "bg-blue-100 text-blue-800",
  },
  {
    id: 2,
    name: "Microsoft Corp.",
    address: "1 Microsoft Way, Redmond, WA 98052",
    phone: "(425) 555-0100",
    url: "https://www.microsoft.com/",
    category: "Software & Services",
    categoryColor: "bg-green-100 text-green-800",
  },
  {
    id: 3,
    name: "Google LLC",
    address: "1600 Amphitheatre Parkway, Mountain View, CA 94043",
    phone: "(650) 555-0102",
    url: "https://www.google.com/",
    category: "Internet Services",
    categoryColor: "bg-purple-100 text-purple-800",
  },
  {
    id: 4,
    name: "Amazon.com, Inc.",
    address: "410 Terry Ave N, Seattle, WA 98109",
    phone: "(206) 555-0103",
    url: "https://www.amazon.com/",
    category: "E-Commerce",
    categoryColor: "bg-orange-100 text-orange-800",
  },
  {
    id: 5,
    name: "Facebook, Inc.",
    address: "1 Hacker Way, Menlo Park, CA 94025",
    phone: "(650) 555-0104",
    url: "https://www.facebook.com/",
    category: "Social Media",
    categoryColor: "bg-indigo-100 text-indigo-800",
  },
  {
    id: 6,
    name: "Vimeo",
    address: "3500 Deer Creek Road, Palo Alto, CA 94304",
    phone: "(650) 555-0105",
    url: "https://www.vimeo.com/",
    category: "Multimedia",
    categoryColor: "bg-cyan-100 text-cyan-800",
  },
  {
    id: 7,
    name: "IBM Corporation",
    address: "1 New Orchard Road, Armonk, NY 10504",
    phone: "(914) 555-0106",
    url: "https://www.ibm.com/",
    category: "Technology",
    categoryColor: "bg-gray-100 text-gray-800",
  },
  {
    id: 8,
    name: "Netflix",
    address: "100 Winchester Circle, Los Gatos, CA 95032",
    phone: "(408) 555-0107",
    url: "https://www.netflix.com/",
    category: "Consumer Electronics",
    categoryColor: "bg-blue-100 text-blue-800",
  },
  {
    id: 9,
    name: "Intel Corporation",
    address: "2200 Mission College Blvd, Santa Clara, CA 95054",
    phone: "(408) 555-0108",
    url: "https://www.intel.com/",
    category: "Semiconductors",
    categoryColor: "bg-yellow-100 text-yellow-800",
  },
  {
    id: 10,
    name: "Sony Corporation",
    address: "1-7-1 Konan, Minato City, Tokyo 108-0075, Japan",
    phone: "(03) 555-0109",
    url: "https://www.sony.com/",
    category: "Electronics",
    categoryColor: "bg-pink-100 text-pink-800",
  },
]

export function CompaniesTable() {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 8

  const filteredCompanies = companies.filter(
    (company) =>
      company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const totalPages = Math.ceil(filteredCompanies.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentCompanies = filteredCompanies.slice(startIndex, endIndex)

  return (
    <Card className="border-gray-200">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-lg font-semibold text-gray-900">Companies Table Data</CardTitle>
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
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">No.</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Company Name</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Address</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Phone Number</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">URL</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Company</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm"></th>
              </tr>
            </thead>
            <tbody>
              {currentCompanies.map((company, index) => (
                <tr key={company.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4 text-sm text-gray-600">{startIndex + index + 1}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                        <span className="text-xs font-medium text-gray-600">{company.name.charAt(0)}</span>
                      </div>
                      <span className="text-sm font-medium text-gray-900">{company.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-600 max-w-xs truncate">{company.address}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{company.phone}</td>
                  <td className="py-4 px-4">
                    <a
                      href={company.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:text-blue-800 truncate block max-w-xs"
                    >
                      {company.url}
                    </a>
                  </td>
                  <td className="py-4 px-4">
                    <Badge className={`${company.categoryColor} border-0`}>{company.category}</Badge>
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
            Showing {startIndex + 1} to {Math.min(endIndex, filteredCompanies.length)} of {filteredCompanies.length}{" "}
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

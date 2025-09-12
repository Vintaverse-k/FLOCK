"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Search,
  Filter,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

const companies = [
  {
    id: 1,
    name: "Vintaverse Pvt.",
    image: "https://vintaverse.com/assets/imgs/400.png",
    address: "Phase-8, Industrial Area Mohali",
    phone: "(+91 7831058000)",
    url: "https://vintaverse.com/",
    category: "Consumer Electronics",
    categoryColor: "border-blue-800 text-blue-800 bg-transparent",
  },
  {
    id: 2,
    name: "Apple Inc.",
    image: "https://logo.clearbit.com/apple.com",
    address: "1 Apple Park Way, Cupertino, CA 95014",
    phone: "(704) 555-0129",
    url: "https://www.apple.com/",
    category: "Consumer Electronics",
    categoryColor: "border-blue-800 text-blue-800 bg-transparent",
  },
  {
    id: 3,
    name: "Microsoft Corp.",
    image: "https://logo.clearbit.com/microsoft.com",
    address: "1 Microsoft Way, Redmond, WA 98052",
    phone: "(425) 555-0100",
    url: "https://www.microsoft.com/",
    category: "Software & Services",
    categoryColor: "border-green-800 text-green-800 bg-transparent",
  },
  {
    id: 4,
    name: "Google LLC",
    image: "https://logo.clearbit.com/google.com",
    address: "1600 Amphitheatre Parkway, Mountain View, CA 94043",
    phone: "(650) 555-0102",
    url: "https://www.google.com/",
    category: "Internet Services",
    categoryColor: "border-purple-800 text-purple-800 bg-transparent",
  },
  {
    id: 5,
    name: "Amazon.com, Inc.",
    image: "https://logo.clearbit.com/amazon.com",
    address: "410 Terry Ave N, Seattle, WA 98109",
    phone: "(206) 555-0103",
    url: "https://www.amazon.com/",
    category: "E-Commerce",
    categoryColor: "border-orange-800 text-orange-800 bg-transparent",
  },
  {
    id: 6,
    name: "Facebook, Inc.",
    image: "https://logo.clearbit.com/facebook.com",
    address: "1 Hacker Way, Menlo Park, CA 94025",
    phone: "(650) 555-0104",
    url: "https://www.facebook.com/",
    category: "Social Media",
    categoryColor: "border-indigo-800 text-indigo-800 bg-transparent",
  },
  {
    id: 7,
    name: "Vimeo",
    image: "https://logo.clearbit.com/vimeo.com",
    address: "3500 Deer Creek Road, Palo Alto, CA 94304",
    phone: "(650) 555-0105",
    url: "https://www.vimeo.com/",
    category: "Multimedia",
    categoryColor: "border-cyan-800 text-cyan-800 bg-transparent",
  },
  {
    id: 8,
    name: "IBM Corporation",
    image: "https://logo.clearbit.com/ibm.com",
    address: "1 New Orchard Road, Armonk, NY 10504",
    phone: "(914) 555-0106",
    url: "https://www.ibm.com/in-en",
    category: "Technology",
    categoryColor: "border-gray-800 text-gray-800 bg-transparent",
  },
]

export function CompaniesTable() {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(8)

  const filteredCompanies = companies.filter(
    (company) =>
      company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const totalPages = Math.ceil(filteredCompanies.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentCompanies = filteredCompanies.slice(startIndex, endIndex)

  return (
    <Card className="border-gray-200">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-lg font-semibold text-gray-900">
          Companies Table Data
        </CardTitle>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value)
                setCurrentPage(1)
              }}
              className="pl-10 w-64 border-gray-200 focus:border-red-500 focus:ring-red-500"
            />
          </div>
          <Button
            variant="outline"
            size="sm"
            className="border-gray-200 bg-transparent"
          >
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
                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">
                  <Checkbox />
                </th>
                <th className="text-left py-3 px-2 font-medium text-gray-600 text-sm w-[40px]">No.</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Company Name</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Address</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Phone</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">URL</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Company</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {currentCompanies.map((company, index) => (
                <tr key={company.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <Checkbox />
                  </td>
                  <td className="py-4 px-2 text-sm text-gray-600">{startIndex + index + 1}</td>
                  <td className="py-4 px-4 w-[220px]">
                    <div className="flex items-center">
                      <img
                        src={company.image}
                        alt={company.name}
                        className="w-8 h-8 rounded-full mr-3 object-cover"
                      />
                      <span className="text-xs font-medium text-gray-900 truncate max-w-[160px] block">
                        {company.name}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-600 max-w-[200px] truncate">
                    {company.address}
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-600">{company.phone}</td>
                  <td className="py-4 px-4 max-w-[180px]">
                    <a
                      href={company.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:text-blue-800 truncate block"
                    >
                      {company.url}
                    </a>
                  </td>
                  <td className="py-4 px-4">
                    <Badge className={`${company.categoryColor} border`}>
                      {company.category}
                    </Badge>
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
            Showing {startIndex + 1} to {Math.min(endIndex, filteredCompanies.length)} of{" "}
            {filteredCompanies.length} results
          </p>
          <div className="flex items-center space-x-2">
            <p className="text-sm text-gray-600">Per page</p>
            <select
              value={itemsPerPage}
              onChange={(e) => {
                setItemsPerPage(Number(e.target.value))
                setCurrentPage(1)
              }}
              className="border border-gray-200 rounded px-2 py-1 text-sm"
            >
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
                    currentPage === page
                      ? "bg-red-500 hover:bg-red-600 text-white"
                      : "border-gray-200 bg-transparent"
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

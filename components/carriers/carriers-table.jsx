import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Filter, MoreHorizontal } from "lucide-react"

export default function CarriersTable() {
  const carriers = [
    {
      id: "CAR-1001",
      name: "DHL Express",
      type: "International",
      avgDeliveryTime: "3.2 days",
      activeShipments: 152,
      contactPerson: "Budi Santoso",
      status: "Active",
    },
    {
      id: "CAR-1002",
      name: "FedEx",
      type: "Worldwide",
      avgDeliveryTime: "3.5 days",
      activeShipments: 175,
      contactPerson: "Alice Johnson",
      status: "Active",
    },
    {
      id: "CAR-1003",
      name: "UPS",
      type: "International",
      avgDeliveryTime: "4.0 days",
      activeShipments: 200,
      contactPerson: "Carlos Mendoza",
      status: "Active",
    },
    {
      id: "CAR-1004",
      name: "USPS",
      type: "Domestic",
      avgDeliveryTime: "2.5 days",
      activeShipments: 100,
      contactPerson: "Linda Smith",
      status: "Active",
    },
    {
      id: "CAR-1005",
      name: "TNT",
      type: "Global",
      avgDeliveryTime: "4.2 days",
      activeShipments: 220,
      contactPerson: "Hiroshi Tanaka",
      status: "Inactive",
    },
    {
      id: "CAR-1006",
      name: "Canada Post",
      type: "National",
      avgDeliveryTime: "5.0 days",
      activeShipments: 130,
      contactPerson: "Emily Nguyen",
      status: "Active",
    },
    {
      id: "CAR-1007",
      name: "Royal Mail",
      type: "International",
      avgDeliveryTime: "6.0 days",
      activeShipments: 250,
      contactPerson: "James Brown",
      status: "Active",
    },
    {
      id: "CAR-1008",
      name: "Australia Post",
      type: "Domestic",
      avgDeliveryTime: "3.8 days",
      activeShipments: 160,
      contactPerson: "Sophia Williams",
      status: "Active",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Carriers Data Table</CardTitle>
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search" className="pl-8 w-[300px]" />
            </div>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead
              className="bg-gray-100 border-b border-gray-300"
              style={{ backgroundColor: "#F6F8FA", borderBottom: "1px solid #DFE1E7" }}
            >
              <tr>
                <th className="p-4">
                  <input type="checkbox" className="bg-gray-100" />
                </th>
                <th className="text-left text-sm p-4 font-medium text-muted-foreground">Carrier ID</th>
                <th className="text-left text-sm p-4 font-medium text-muted-foreground">Name</th>
                <th className="text-left text-sm p-4 font-medium text-muted-foreground">Type</th>
                <th className="text-left text-sm p-4 font-medium text-muted-foreground">Avg. Delivery Time</th>
                <th className="text-left text-sm p-4 font-medium text-muted-foreground">Active Shipments</th>
                <th className="text-left text-sm p-4 font-medium text-muted-foreground">Contact Person</th>
                <th className="text-left text-sm p-4 font-medium text-muted-foreground">Status</th>
                <th className="text-left text-sm p-4 font-medium text-muted-foreground"></th>
              </tr>
            </thead>
            <tbody>
              {carriers.map((carrier) => (
                <tr key={carrier.id} className="border-b hover:bg-muted/50">
                  <td className="p-4">
                    <input type="checkbox" className="bg-white" />
                  </td>
                  <td className="p-4">{carrier.id}</td>
                  <td className="p-4">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={`/placeholder-user.png`} />
                        <AvatarFallback>{carrier.name.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{carrier.name}</span>
                    </div>
                  </td>
                  <td className="p-4">{carrier.type}</td>
                  <td className="p-4">{carrier.avgDeliveryTime}</td>
                  <td className="p-4">{carrier.activeShipments}</td>
                  <td className="p-4">{carrier.contactPerson}</td>
                  <td className="p-4">
                    <Badge
                      variant={carrier.status === "Active" ? "default" : "secondary"}
                      className={
                        carrier.status === "Active"
                          ? "bg-green-100 text-green-800 hover:bg-green-100"
                          : "bg-red-100 text-red-800 hover:bg-red-100"
                      }
                    >
                      {carrier.status}
                    </Badge>
                  </td>
                  <td className="p-4">
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between space-x-2 py-4">
          <div className="text-sm text-muted-foreground">Showing 1 to 8 of 473 results</div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <div className="flex items-center space-x-1">
              <Button variant="default" size="sm" className="bg-red-500 hover:bg-red-600">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <span className="px-2">...</span>
              <Button variant="outline" size="sm">
                8
              </Button>
            </div>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

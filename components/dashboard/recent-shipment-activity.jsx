import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, MoreHorizontal } from "lucide-react"

const shipments = [
  {
    id: "SHP-1001",
    origin: "Jakarta, ID",
    destination: "Singapore, SG",
    carrier: "DHL Express",
    status: "In Transit",
    eta: "2025-08-15 14:30",
    weight: "12.4",
    cost: "85.00",
  },
  {
    id: "SHP-1002",
    origin: "Tokyo, JP",
    destination: "Seoul, KR",
    carrier: "FedEx",
    status: "Delivered",
    eta: "2025-08-10 09:00",
    weight: "8.7",
    cost: "120.00",
  },
]

const getStatusColor = (status) => {
  switch (status) {
    case "In Transit":
      return "bg-yellow-100 text-yellow-800"
    case "Delivered":
      return "bg-green-100 text-green-800"
    case "Delayed":
      return "bg-red-100 text-red-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

function RecentShipmentActivity() {
  return (
    <Card className="border-gray-200">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-lg font-semibold text-gray-900">Recent Shipment Activity</CardTitle>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search"
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
              <tr style={{ backgroundColor: "#F6F8FA", borderBottom: "1px solid #DFE1E7" }}>
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
              {shipments.map((shipment) => (
                <tr key={shipment.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <input type="checkbox" />
                  </td>
                  <td className="py-4 px-4 text-sm font-medium text-gray-900">{shipment.id}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{shipment.origin}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{shipment.destination}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{shipment.carrier}</td>
                  <td className="py-4 px-4">
                    <Badge className={`${getStatusColor(shipment.status)} border-0`}>
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
      </CardContent>
    </Card>
  )
}

export default RecentShipmentActivity

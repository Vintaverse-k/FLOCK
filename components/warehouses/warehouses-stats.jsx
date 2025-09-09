import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, TrendingDown, Warehouse, CheckCircle, AlertTriangle, BarChart3 } from "lucide-react"

const stats = [
  {
    title: "Total Warehouses",
    value: "28",
    change: "+8%",
    changeType: "increase",
    subtitle: "from last month",
    icon: Warehouse,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Active Warehouses",
    value: "22",
    change: "+8%",
    changeType: "increase",
    subtitle: "from last month",
    icon: CheckCircle,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    title: "Under Maintenance",
    value: "3",
    change: "-8%",
    changeType: "decrease",
    subtitle: "from last month",
    icon: AlertTriangle,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    title: "Avg. Capacity Used",
    value: "64",
    change: "+8%",
    changeType: "increase",
    subtitle: "from last month",
    icon: BarChart3,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
]

export function WarehousesStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <Card key={stat.title} className="border-gray-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                    <stat.icon className={`h-4 w-4 ${stat.color}`} />
                  </div>
                </div>
                <div className="flex items-baseline space-x-2">
                  <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                  <div className="flex items-center">
                    {stat.changeType === "increase" ? (
                      <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                    ) : (
                      <TrendingDown className="h-3 w-3 text-red-500 mr-1" />
                    )}
                    <span
                      className={`text-xs font-medium ${
                        stat.changeType === "increase" ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {stat.change}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-1">{stat.subtitle}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

'use client'

import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, TrendingDown } from "lucide-react"

const stats = [
  {
    title: "Total Warehouses",
    value: "28",
    change: "+8%",
    changeType: "increase",
    subtitle: "from last month",
    iconSrc: "/totalwarehouse.svg",
    color: "text-blue-600",
  },
  {
    title: "Active Warehouses",
    value: "22",
    change: "+8%",
    changeType: "increase",
    subtitle: "from last month",
    iconSrc: "/activewarehouse.svg",
    color: "text-green-600",
  },
  {
    title: "Under Maintenance",
    value: "3",
    change: "-8%",
    changeType: "decrease",
    subtitle: "from last month",
    iconSrc: "/underwarehouse.svg",
    color: "text-orange-600",
  },
  {
    title: "Avg. Capacity Used",
    value: "64%",
    change: "+8%",
    changeType: "increase",
    subtitle: "from last month",
    iconSrc: "/avgwarehouse.svg",
    color: "text-purple-600",
  },
]

export function WarehousesStats() {
  return (
    <div className="flex flex-wrap gap-6 justify-start">
      {stats.map((stat) => (
        <Card
          key={stat.title}
          className="border-gray-200"
          style={{ width: '265px', height: '137px' }}
        >
          <CardContent className="p-6 h-full">
            <div className="flex items-center justify-between h-full">
              <div className="flex-1 flex flex-col justify-between">
                {/* Top section */}
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <div>
                    <img
                      src={stat.iconSrc}
                      alt={`${stat.title} icon`}
                      width={36}
                      height={36}
                    />
                  </div>
                </div>

                {/* Value */}
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>

                {/* Change and subtitle */}
                <div className="flex items-center gap-2 mt-1">
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
                  <p className="text-xs text-gray-500">{stat.subtitle}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

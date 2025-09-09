'use client'

import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, TrendingDown } from "lucide-react"

export default function CarriersStats() {
  const stats = [
    {
      title: "Total Carriers",
      value: "18",
      change: "+8%",
      trend: "up",
      subtitle: "from last month",
      iconSrc: "/totalshipmenticon.svg",
    },
    {
      title: "Active Carriers",
      value: "15",
      change: "+4%",
      trend: "up",
      subtitle: "from last month",
      iconSrc: "/delay.svg",
    },
    {
      title: "Avg. On-Time Rate",
      value: "92%",
      change: "+2%",
      trend: "up",
      subtitle: "from last month",
      iconSrc: "/returnicon.svg",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat) => (
        <Card
          key={stat.title}
          className="border-gray-200 w-full max-w-[360px]"
          style={{ height: '137px' }}
        >
          <CardContent className="p-6 h-full">
            <div className="flex items-center justify-between h-full">
              <div className="flex-1 flex flex-col justify-between">
                {/* Top Section */}
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

                {/* Change and Subtitle */}
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex items-center">
                    {stat.trend === "up" ? (
                      <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                    ) : (
                      <TrendingDown className="h-3 w-3 text-red-500 mr-1" />
                    )}
                    <span
                      className={`text-xs font-medium ${
                        stat.trend === "up" ? "text-green-600" : "text-red-600"
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

"use client"

import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, TrendingDown } from "lucide-react"

export default function ReportsStats() {
  const stats = [
    {
      title: "Total Shipments",
      value: "5,340",
      change: "+8%",
      trend: "up",
      subtitle: "from last month",
      iconSrc: "/totalshipmenticon.svg",
    },
    {
      title: "Delayed Shipments",
      value: "1,023",
      change: "-8%",
      trend: "down",
      subtitle: "from last month",
      iconSrc: "/delayicon.svg",
    },
    {
      title: "Total Destinations",
      value: "837",
      change: "+8%",
      trend: "up",
      subtitle: "from last month",
      iconSrc: "/destinationicon.svg",
    },
    {
      title: "Returned Packages",
      value: "190",
      change: "-8%",
      trend: "down",
      subtitle: "from last month",
      iconSrc: "/returnicon.svg",
    },
  ]

  return (
    <div className="flex gap-6 overflow-x-auto whitespace-nowrap">
      {stats.map((stat, index) => (
        <Card
          key={index}
          className="border-gray-200 flex-shrink-0"
          style={{ width: '265px', height: '137px' }}
        >
          <CardContent className="p-6 h-full">
            <div className="flex items-center justify-between h-full">
              <div className="flex-1 flex flex-col justify-between">
                {/* Title and Icon */}
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <img
                    src={stat.iconSrc}
                    alt={`${stat.title} icon`}
                    width={36}
                    height={36}
                  />
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

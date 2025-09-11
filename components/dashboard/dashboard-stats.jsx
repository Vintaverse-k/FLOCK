'use client'

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import "../../styles/dashboard.css"

const stats = [
  {
    title: "Total Shipments",
    value: "5,340",
    change: "+8%",
    subtitle: "from last month",
    icon: "totalshipmenticon.svg",
    color: "text-blue-600",
  },
  {
    title: "Delayed Shipments",
    value: "1,023",
    change: "-8%",
    subtitle: "from last month",
    icon: "delayicon.svg",
    color: "text-red-600",
  },
  {
    title: "Total Destinations",
    value: "837",
    change: "+8%",
    subtitle: "from last month",
    icon: "destinationicon.svg",
    color: "text-green-600",
  },
  {
    title: "Returned Packages",
    value: "190",
    change: "-8%",
    subtitle: "from last month",
    icon: "returnicon.svg",
    color: "text-orange-600",
  },
]

export function DashboardStats() {
  return (
    <div className="flex flex-wrap gap-6 justify-start">
      {stats.map((stat) => (
        <Card
          key={stat.title}
          className="border-gray-200 dashboard-card"
        >
          <CardContent className="p-6 h-full">
            <div className="flex items-center justify-between h-full">
              <div className="flex-1 flex flex-col justify-between">
                
                {/* Title + Icon */}
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <div>
                    <Image
                      src={`/${stat.icon}`}
                      alt={stat.title}
                      width={36}
                      height={36}
                      className={stat.color}
                    />
                  </div>
                </div>

                {/* Value */}
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>

                {/* Change + Subtitle */}
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex items-center">
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

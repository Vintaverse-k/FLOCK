import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown } from "lucide-react"

export default function ReportsStats() {
  const stats = [
    {
      title: "Total Shipments",
      value: "5,340",
      change: "+8%",
      trend: "up",
      subtitle: "from last month",
    },
    {
      title: "Delayed Shipments",
      value: "1,023",
      change: "-8%",
      trend: "down",
      subtitle: "from last month",
    },
    {
      title: "Total Destinations",
      value: "837",
      change: "+8%",
      trend: "up",
      subtitle: "from last month",
    },
    {
      title: "Returned Packages",
      value: "190",
      change: "-8%",
      trend: "down",
      subtitle: "from last month",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
            <div className={`flex items-center text-xs ${stat.trend === "up" ? "text-green-600" : "text-red-600"}`}>
              {stat.trend === "up" ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">
              <span className={stat.trend === "up" ? "text-green-600" : "text-red-600"}>{stat.change}</span>{" "}
              {stat.subtitle}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

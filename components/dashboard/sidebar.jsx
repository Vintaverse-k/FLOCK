"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ChevronLeft } from "lucide-react"
import "../../styles/sidebar.css"
const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: "/home.svg" },
  { name: "Shipments", href: "/dashboard/shipments", icon: "/shipment.svg" },
  { name: "Tracking", href: "/dashboard/tracking", icon: "/track.svg" },
]

const features = [
  { name: "Carriers", href: "/dashboard/carriers", icon: "/carriers.svg" },
  { name: "Customers", href: "/dashboard/customers", icon: "/customers.svg" },
  { name: "Companies", href: "/dashboard/companies", icon: "/companies.svg" },
  { name: "Warehouses", href: "/dashboard/warehouses", icon: "/warehouses.svg" },
  { name: "Reports", href: "/dashboard/reports", icon: "/reports.svg" },
]

const bottomNavigation = [
  { name: "Settings", href: "/dashboard/settings", icon: "/setting.svg" },
  { name: "Help & Center", href: "/dashboard/help", icon: "/help.svg" },
  { name: "Logout", href: "/", icon: "/logout.svg" },
]

export function DashboardSidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <button
  className={`hamburger-btn md:hidden ${mobileOpen ? "active" : ""}`}
  onClick={() => setMobileOpen(!mobileOpen)}
>
  <span></span>
  <span></span>
  <span></span>
</button>


      <div
        className={cn(
          "dashboard-sidebar bg-white border-r border-gray-200 flex flex-col",
          collapsed ? "w-16" : "w-64",
          mobileOpen && "active"
        )}
      >
        {/* Logo */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          {!collapsed && (
            <div className="flex items-center">
              <img
                src="/logo.svg"
                alt="Flock Icon"
                className="h-[32px] w-[32px] object-contain"
              />
              <span className="ml-3 text-xl font-bold text-gray-900">FLOCK</span>
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1 rounded-lg hover:bg-gray-100 text-gray-500"
          >
            <ChevronLeft
              className={cn(
                "h-4 w-4 transition-transform",
                collapsed && "rotate-180"
              )}
            />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 flex flex-col justify-between py-4">
          <div className="space-y-6">
            {/* Main Menu */}
            <div className="px-3">
              {!collapsed && (
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  MAIN MENU
                </p>
              )}
              <nav className="space-y-1">
                {navigation.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                        isActive

              ? "bg-[#F6F8FA] border border-[#DFE1E7]"
              : "hover:bg-gray-100"
                      )}
                    >
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="h-5 w-5 mr-3 flex-shrink-0"
                      />
                      {!collapsed && item.name}
                    </Link>
                  )
                })}
              </nav>
            </div>

            {/* Features */}
            <div className="px-3">
              {!collapsed && (
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  FEATURES
                </p>
              )}
              <nav className="space-y-1">
                {features.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                        isActive

              ? "bg-[#F6F8FA] border border-[#DFE1E7]"
              : "hover:bg-gray-100"
                      )}
                    >
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="h-5 w-5 mr-3 flex-shrink-0"
                      />
                      {!collapsed && item.name}
                    </Link>
                  )
                })}
              </nav>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="px-3 space-y-1">
            {bottomNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors"
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="h-5 w-5 mr-3 flex-shrink-0"
                />
                {!collapsed && item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

"use client";

import { useState } from "react";
import { Search, Bell, RefreshCw } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import "../../styles/header.css";

export function DashboardHeader() {
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    {
      id: 1,
      title: "Shipment Delayed",
      message: "SHP-1004 is delayed due to customs check",
      timestamp: "2025-08-13 09:12",
      icon: "/delayedicon.svg",
      unread: true,
    },
    {
      id: 2,
      title: "Shipment Delivered",
      message: "SHP-1002 has been successfully delivered",
      timestamp: "2025-08-10 09:50",
      icon: "/deleiverdicon.svg",
      unread: true,
    },
    {
      id: 3,
      title: "Customs Clearance Complete",
      message: "SHP-1001 cleared Singapore customs",
      timestamp: "2025-08-13 10:10",
      icon: "/customeicon.svg",
      unread: false,
    },
    {
      id: 4,
      title: "New Shipment Created",
      message: "SHP-1006 has been added to the system",
      timestamp: "2025-08-12 15:25",
      icon: "/newship.svg",
      unread: false,
    },
  ];

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Search */}
        <div style={{ width: 288 }}>
          <div className="relative" style={{ height: 40 }}>
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Searchhh"
              className="pl-10 pr-4 h-10 w-full border-gray-200 focus:border-red-500 focus:ring-red-500"
              style={{ height: 40 }}
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <kbd className="px-2 py-1 text-xs text-gray-500 bg-gray-100 rounded border">⌘ K</kbd>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4 relative">
          <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">
            <RefreshCw className="h-4 w-4" />
          </Button>

          <div className="relative">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-500 hover:text-gray-700 relative"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <Bell className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full"></span>
            </Button>

            {/* Notification Dropdown */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-96 bg-white border border-gray-200 rounded-lg shadow-xl z-50 overflow-hidden">
                <div className="p-4 font-semibold text-lg border-b">Notifications</div>
                <div className="max-h-96 overflow-y-auto">
                  {notifications.map((notif) => (
                    <div
                      key={notif.id}
                      className="flex items-start space-x-3 px-4 py-3 hover:bg-gray-50 transition"
                    >
                      <div className="mt-1">
                        <img src={notif.icon} alt="icon" className="h-8 w-8" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-sm text-gray-900">{notif.title}</p>
                        <p className="text-sm text-gray-600">{notif.message}</p>
                        <p className="text-xs text-gray-400 mt-1">{notif.timestamp}</p>
                      </div>
                      {notif.unread && <span className="h-2 w-2 mt-1 bg-red-500 rounded-full"></span>}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center px-4 py-3 border-t bg-gray-50">
                  <button className="text-red-500 text-sm font-medium hover:underline">
                    Mark as all read
                  </button>
                  <button className="text-white bg-red-500 text-sm px-4 py-1.5 rounded hover:bg-red-600">
                    View All Notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder-user.png" />
              <AvatarFallback>RJ</AvatarFallback>
            </Avatar>
            <div className="text-sm">
              <p className="font-medium text-gray-900">Robert Johnson</p>
              <p className="text-gray-500">Super Admin</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

"use client";

import { Search, Bell, RefreshCw } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function DashboardHeader() {
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
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">
            <RefreshCw className="h-4 w-4" />
          </Button>

          <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700 relative">
            <Bell className="h-4 w-4" />
            <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full"></span>
          </Button>

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

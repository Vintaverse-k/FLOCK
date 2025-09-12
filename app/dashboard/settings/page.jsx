"use client"
import { useState } from "react"

// Import tab components
import GeneralTab from "./tabs/GeneralTab"
import PlanPricingTab from "./tabs/PlanPricingTab"
import MyAccountTab from "./tabs/MyAccountTab"
import PaymentBillingTab from "./tabs/PaymentBillingTab"
import TaxDutiesTab from "./tabs/TaxDutiesTab"
import LinkAccountTab from "./tabs/LinkAccountTab"
import TimeLanguageTab from "./tabs/TimeLanguageTab"
import PasswordTab from "./tabs/PasswordTab"
import NotificationTab from "./tabs/NotificationTab"

import GeneralTabbtn from "./tabs/GeneralTabbtn" 

// Sidebar items
const tabs = [
  { id: "general", label: "General" },
  { id: "plan", label: "Plan & Pricing" },
  { id: "account", label: "My Account" },
  { id: "billing", label: "Payment & Billing" },
  { id: "tax", label: "Tax & Duties" },
  { id: "link", label: "Link Account" },
  { id: "time", label: "Time & Language" },
  { id: "password", label: "Password" },
  { id: "notification", label: "Notification" },
]

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("general")

  return (
   <div className=" h-[776px]">
  {/* 🔘 Top Bar: Heading + Buttons */}
  <div className="flex items-center justify-between mb-4">
    <h2 className="text-xl font-bold">Settings</h2>
    <GeneralTabbtn />
  </div>

  {/* Main Container */}
  <div className="flex h-full border border-[#DFE1E7] rounded-lg bg-white">
    {/* Sidebar */}
  {/* Sidebar */}
<div className="w-64 border-r border-[#DFE1E7] p-4">
  <ul className="space-y-2">
    {tabs.map((tab) => (
      <li key={tab.id}>
        <button
          onClick={() => setActiveTab(tab.id)}
          className={`w-full text-left px-3 py-2 rounded-md transition text-[#666D80] ${
            activeTab === tab.id
              ? "bg-[#F6F8FA] border border-[#DFE1E7]"
              : "hover:bg-gray-100"
          }`}
        >
          {tab.label}
        </button>
      </li>
    ))}
  </ul>
</div>

    {/* Content Area */}
    <div className="flex-1 p-6 overflow-y-auto h-full">
      {activeTab === "general" && <GeneralTab />}
      {activeTab === "plan" && <PlanPricingTab />}
      {activeTab === "account" && <MyAccountTab />}
      {activeTab === "billing" && <PaymentBillingTab />}
      {activeTab === "tax" && <TaxDutiesTab />}
      {activeTab === "link" && <LinkAccountTab />}
      {activeTab === "time" && <TimeLanguageTab />}
      {activeTab === "password" && <PasswordTab />}
      {activeTab === "notification" && <NotificationTab />}
    </div>
  </div>
</div>

  )
}

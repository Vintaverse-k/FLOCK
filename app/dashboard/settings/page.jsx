"use client"
import { useState } from "react"

// Import tab components
import GeneralTab from "./tabs/GeneralTab"
// import PlanPricingTab from "./tabs/PlanPricingTab"
// import MyAccountTab from "./tabs/MyAccountTab"
// import PaymentBillingTab from "./tabs/PaymentBillingTab"
// import TaxDutiesTab from "./tabs/TaxDutiesTab"
// import LinkAccountTab from "./tabs/LinkAccountTab"
// import TimeLanguageTab from "./tabs/TimeLanguageTab"
// import PasswordTab from "./tabs/PasswordTab"
// import NotificationTab from "./tabs/NotificationTab"

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
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 border-r bg-gray-50 p-4">
        <h2 className="mb-6 text-xl font-bold">Settings</h2>
        <ul className="space-y-2">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                onClick={() => setActiveTab(tab.id)}
                className={`w-full text-left px-3 py-2 rounded-md transition ${
                  activeTab === tab.id
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-200"
                }`}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-6">
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
  )
}

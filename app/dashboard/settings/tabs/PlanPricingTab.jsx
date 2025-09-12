"use client"
import React from "react"

const PlanPricingTab = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left Section */}
      <div className="w-[300px] h-[112px] overflow-hidden">
        <h2 className="text-lg font-semibold mb-2">Plan & Pricing</h2>
        <p className="text-gray-500">
          Manage your subscription plans. Choose a plan that best suits your needs, 
          compare features, and adjust your subscription as needed.
        </p>
      </div>

      {/* Right Section - Plans */}
      <div className="space-y-6 -ml-[30%]">

        {/* Basic Plan */}
        <div className="w-[532px] h-[232px] border border-gray-300 rounded-[16px] p-5 bg-white">
          <div className="flex justify-between items-start mb-3 border-b pb-3">
            <h3 className="text-lg font-semibold">Basic Plan</h3>
            <button className="px-3 py-1 text-sm border rounded-md text-gray-600 hover:bg-gray-100">
              Downgrade
            </button>
          </div>
          <p className="text-2xl font-bold">
            $24 <span className="text-base font-normal text-gray-600">/ month</span>
          </p>
          <p className="text-gray-500 mb-4">
            All the basics for starting a new business
          </p>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-gray-700 text-sm border-t pt-2">
  <li className="flex items-center">
    <img src="/tick.svg" alt="Check" className="w-4 h-4 mr-2" />
    Up to 2 staff members
  </li>
  <li className="flex items-center">
    <img src="/tick.svg" alt="Check" className="w-4 h-4 mr-2" />
    Up to 4 locations
  </li>
  <li className="flex items-center">
    <img src="/tick.svg" alt="Check" className="w-4 h-4 mr-2" />
    Fraud analysis
  </li>
  <li className="flex items-center">
    <img src="/tick.svg" alt="Check" className="w-4 h-4 mr-2" />
    Professional reports
  </li>
</ul>

        </div>

        {/* Pro Plan */}
        <div className="w-[532px] h-[232px] border border-gray-300 rounded-[16px] p-5 bg-white">
          <div className="flex justify-between items-start mb-3 border-b pb-3">
            <h3 className="text-lg font-semibold">Pro Plan</h3>
            <button className="px-3 py-1 text-sm border rounded-md bg-gray-100 text-gray-700">
              Current Plan
            </button>
          </div>
          <p className="text-2xl font-bold">
            $64 <span className="text-base font-normal text-gray-600">/ month</span>
          </p>
          <p className="text-gray-500 mb-4">
            Everything you need for a growing business
          </p>
               <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-gray-700 text-sm border-t pt-2">
  <li className="flex items-center">
    <img src="/tick.svg" alt="Check" className="w-4 h-4 mr-2" />
    Up to 2 staff members
  </li>
  <li className="flex items-center">
    <img src="/tick.svg" alt="Check" className="w-4 h-4 mr-2" />
    Up to 4 locations
  </li>
  <li className="flex items-center">
    <img src="/tick.svg" alt="Check" className="w-4 h-4 mr-2" />
    Fraud analysis
  </li>
  <li className="flex items-center">
    <img src="/tick.svg" alt="Check" className="w-4 h-4 mr-2" />
    Professional reports
  </li>
</ul>
        </div>

        {/* Advanced Plan */}
        <div className="w-[532px] h-[232px] border border-gray-300 rounded-[16px] p-5 bg-white">
          <div className="flex justify-between items-start mb-3 border-b pb-3">
            <h3 className="text-lg font-semibold">Advanced Plan</h3>
            <button className="px-3 py-1 text-sm border rounded-md text-white" style={{backgroundColor: "#F34147"}}>
              Free Trial - 30 Days
            </button>
          </div>
          <p className="text-2xl font-bold">
            $124 <span className="text-base font-normal text-gray-600">/ month</span>
          </p>
          <p className="text-gray-500 mb-4">
            Advanced features for scaling your business
          </p>
               <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-gray-700 text-sm border-t pt-2">
  <li className="flex items-center">
    <img src="/tick.svg" alt="Check" className="w-4 h-4 mr-2" />
    Up to 2 staff members
  </li>
  <li className="flex items-center">
    <img src="/tick.svg" alt="Check" className="w-4 h-4 mr-2" />
    Up to 4 locations
  </li>
  <li className="flex items-center">
    <img src="/tick.svg" alt="Check" className="w-4 h-4 mr-2" />
    Fraud analysis
  </li>
  <li className="flex items-center">
    <img src="/tick.svg" alt="Check" className="w-4 h-4 mr-2" />
    Professional reports
  </li>
</ul>
        </div>

      </div>
    </div>
  )
}

export default PlanPricingTab

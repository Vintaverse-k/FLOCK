"use client";
import React from "react";

const AccountSettingsForm = () => {
  return (
    <div className="p-6 bg-white rounded-lg">
      {/* Main layout: Flex container */}
      <div className="flex flex-col md:flex-row md:items-start gap-8">
        {/* Left Section: Heading + Description */}
        <div className="md:w-1/2">
          <h2 className="text-lg font-semibold">Account Setting</h2>
          <p className="text-gray-500 text-sm mt-2">
            View and update your account details, profile, and more.
          </p>
        </div>

        {/* Right Section: Form */}
        <div className="md:w-1/2">
          <form className="space-y-4">
            {/* Full Name */}
            <div>
              <label
                style={{ color: "#666D80" }}
                className="block  text-sm font-medium mb-1"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value="Robert Johnson"
                className="w-full border border-gray-300 rounded-md p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Email Address */}
            <div>
              <label
                style={{ color: "#666D80" }}
                className="block text-sm font-medium mb-1"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value="robertjohnson@gmail.com"
                className="w-full border border-gray-300 rounded-md p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label
                style={{ color: "#666D80" }}
                className="block text-sm font-medium mb-1"
              >
                Phone Number <span className="text-gray-400">(optional)</span>
              </label>
              <input
                type="text"
                value="+1 (212) 555 4567"
                className="w-full border border-gray-300 rounded-md p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AccountSettingsForm;

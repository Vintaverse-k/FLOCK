"use client"

export default function GeneralTab() {
  return (
    <div className="space-y-8">
      {/* Account Details Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left side heading */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Account Details</h2>
          <p className="text-gray-500">
            Your users will use this information to contact you.
          </p>
        </div>

        {/* Right side form */}
        <div className="space-y-4">
          {/* Company Name */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Company Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              defaultValue="Flock"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Industry */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Industry <span className="text-red-500">*</span>
            </label>
            <select className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
              <option>Delivery</option>
              <option>Technology</option>
              <option>Finance</option>
              <option>Healthcare</option>
            </select>
          </div>

          {/* Currency */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Currency <span className="text-red-500">*</span>
            </label>
            <select className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
              <option>US Dollar</option>
              <option>Euro</option>
              <option>Indian Rupee</option>
              <option>British Pound</option>
            </select>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-300" />

      {/* Address Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left side heading */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Address</h2>
          <p className="text-gray-500">
            This address will appear on your invoice.
          </p>
        </div>

        {/* Right side form */}
        <div className="space-y-4">
          {/* Address Name */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Address Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              defaultValue="Apartment"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Country or Region */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Country or Region <span className="text-red-500">*</span>
            </label>
            <select className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
              <option>United States</option>
              <option>India</option>
              <option>United Kingdom</option>
              <option>Germany</option>
            </select>
          </div>

          {/* City */}
          <div>
            <label className="block text-sm font-medium mb-1">
              City <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              defaultValue="Los Angeles"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              defaultValue="123 Sunset Boulevard, Los Angeles, CA"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Postal Code */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Postal Code <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              defaultValue="90028"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

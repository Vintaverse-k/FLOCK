import React from 'react';

const PasswordTab = () => {
  return (
    <div className="p-8 min-h-screen font-sans text-gray-800">
      <div className="max-w-4xl mx-auto flex">
        {/* Left Section - Password */}
        <div className="w-1/3 pr-8">
          <h2 className="text-xl font-semibold text-gray-800">Password</h2>
          <p className="mt-2 text-sm text-gray-500">
            Change or view your password
          </p>
        </div>

        {/* Right Section - Password Fields */}
        <div className="w-2/3 space-y-6">
          <div>
            <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-800" style={{ color: '#666D80' }}>
              Current Password <span className="text-red-500">*</span>
            </label>
            <div className="mt-1 relative rounded-md border">
              <input
                type="password"
                id="currentPassword"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="••••••••"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-800" style={{ color: '#666D80' }}>
              New Password <span className="text-red-500">*</span>
            </label>
            <div className="mt-1 relative rounded-md border">
              <input
                type="password"
                id="newPassword"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="••••••••"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Must be at least 8 characters
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordTab;
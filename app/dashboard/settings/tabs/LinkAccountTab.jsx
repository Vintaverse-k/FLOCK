import React from 'react';

const LinkAccountTab = () => {
  return (
    <div className="p-8 min-h-screen font-sans">
      <div className="max-w-4xl mx-auto flex">
        {/* Left Section - Link Account */}
        <div className="w-1/3 pr-8">
          <h2 className="text-xl font-semibold text-[#0D0D12]">Link Account</h2>
          <p className="mt-2 text-sm text-gray-500">
            Your customers will use this information to contact you.
          </p>
        </div>

        {/* Right Section - Social Media Links */}
        <div className="w-2/3 space-y-6">
          <div>
            <label htmlFor="instagram" className="block text-sm font-medium text-[#666D80]">
              Instagram
            </label>
            <input
              type="text"
              id="instagram"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-[#0D0D12] focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="https://www.instagram.com/flock"
            />
          </div>

          <div>
            <label htmlFor="facebook" className="block text-sm font-medium text-[#666D80]">
              Facebook
            </label>
            <input
              type="text"
              id="facebook"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-[#0D0D12] focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="https://www.instagram.com/flock"
            />
          </div>

          <div>
            <label htmlFor="twitter" className="block text-sm font-medium text-[#666D80]">
              Twitter
            </label>
            <input
              type="text"
              id="twitter"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-[#0D0D12] focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="https://www.instagram.com/flock"
            />
          </div>

          <div>
            <label htmlFor="youtube" className="block text-sm font-medium text-[#666D80]">
              YouTube
            </label>
            <input
              type="text"
              id="youtube"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-[#0D0D12] focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="https://www.instagram.com/flock"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkAccountTab;
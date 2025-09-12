import React from 'react';

const TaxDutiesTab = () => {
  return (
    <div className="p-8  min-h-screen font-sans text-gray-800">
      <div className="max-w-4xl mx-auto">
        
        {/* Tax & duties section */}
        <div className="flex">
          <div className="w-1/3 pr-8">
            <h2 className="text-xl font-semibold text-gray-800">Tax & duties</h2>
            <p className="mt-2 text-sm text-gray-500">
              Review the taxes and duties associated with your purchases and subscriptions.
            </p>
          </div>
          <div className="w-2/3 bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="grid grid-cols-3 text-sm font-medium text-gray-500 border-b border-gray-200">
              <div className="p-4">Country or Region</div>
              <div className="p-4">Collecting</div>
              <div className="p-4">Percentage</div>
            </div>
            <div className="grid grid-cols-3 items-center text-sm text-gray-800 border-b border-gray-200">
              <div className="p-4 flex items-center">
                <img src="https://flagsapi.com/US/flat/32.png" alt="United States flag" className="w-5 h-5 mr-2" />
                United States
              </div>
              <div className="p-4 text-gray-500">Taxes</div>
              <div className="p-4 text-gray-500">20%</div>
            </div>
            <div className="grid grid-cols-3 items-center text-sm text-gray-800">
              <div className="p-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
                  <path d="M2 12s2-3 10-3 10 3 10 3" />
                  <path d="M12 2s3 2 3 10-3 10-3 10" />
                  <path d="M12 2v20" />
                  <path d="M2 12h20" />
                </svg>
                Rest of World
              </div>
              <div className="p-4 text-gray-500">-</div>
              <div className="p-4 text-gray-500">-</div>
            </div>
          </div>
        </div>

        <div className="my-8 h-px bg-gray-200"></div>

        {/* Tax from review section */}
        <div className="flex">
          <div className="w-1/3 pr-8">
            <h2 className="text-xl font-semibold text-gray-800">Tax from review</h2>
            <p className="mt-2 text-sm text-gray-500">
              Manage where you collect taxes and duties. Check with a tax expert if you’re unsure where you have a tax obligation.
            </p>
          </div>
          <div className="w-2/3 space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium" style={{ color: '#666D80' }}>
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                placeholder="Robert Johnson"
              />
            </div>
            <div>
              <label htmlFor="treatyCountry" className="block text-sm font-medium" style={{ color: '#666D80' }}>
                Treaty Country <span className="text-red-500">*</span>
              </label>
              <div className="mt-1">
                <select
                  id="treatyCountry"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="permanentResidence" className="block text-sm font-medium" style={{ color: '#666D80' }}>
                Permanent Residence <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="permanentResidence"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                placeholder="123 Elm Street, Springfield, IL 62704"
              />
            </div>
            <div>
              <label htmlFor="mailingAddress" className="block text-sm font-medium" style={{ color: '#666D80' }}>
                Mailing Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="mailingAddress"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                placeholder="456 Maple Avenue, Rivertown, TX 75001"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxDutiesTab;
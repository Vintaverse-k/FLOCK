import React from 'react';

const TimeLanguageTab = () => {
  return (
    <div className="p-8 min-h-screen font-sans text-gray-800">
      <div className="max-w-4xl mx-auto">
        
        {/* Time section */}
        <div className="flex">
          <div className="w-1/3 pr-8">
            <h2 className="text-xl font-semibold text-gray-800">Time</h2>
            <p className="mt-2 text-sm text-gray-500">
              Set your preferred time zone to ensure that all activities align with your local time.
            </p>
          </div>
          <div className="w-2/3">
            <label htmlFor="timeZone" className="block text-sm font-medium text-gray-800">
              Time Zone
            </label>
            <div className="mt-1">
              <select
                id="timeZone"
                className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
              >
                <option>Pacific Standard Time (PST)</option>
                <option>Eastern Standard Time (EST)</option>
                <option>Greenwich Mean Time (GMT)</option>
              </select>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              The current time is 3:45 PM.
            </p>
          </div>
        </div>

        <div className="my-8 h-px bg-gray-200"></div>

        {/* Language section */}
        <div className="flex">
          <div className="w-1/3 pr-8">
            <h2 className="text-xl font-semibold text-gray-800">Set you language</h2>
            <p className="mt-2 text-sm text-gray-500">
              Choose the language. All text and communication will be displayed in the language you select.
            </p>
          </div>
          <div className="w-2/3">
            <label htmlFor="language" className="block text-sm font-medium text-gray-800">
              Language
            </label>
            <div className="mt-1">
              <select
                id="language"
                className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
              >
                <option>English (United States)</option>
                <option>Spanish (United States)</option>
                <option>Hindi (India)</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLanguageTab;
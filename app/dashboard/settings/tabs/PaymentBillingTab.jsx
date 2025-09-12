import React, { useState } from 'react';

const PaymentBillingTab = () => {
  const [selectedCard, setSelectedCard] = useState('mastercard');

  return (
    <div className="p-8 min-h-screen font-sans text-gray-800">
      <div className="max-w-4xl mx-auto flex">
        {/* Left Section */}
        <div className="w-1/3 pr-8">
          {/* Payment Section */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Payment</h2>
            <p className="mt-2 text-sm text-gray-500">
              Manage your payment methods securely. Add, update, or remove your credit/debit cards.
            </p>
          </div>

          {/* Billing Section */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800">Billing</h2>
            <p className="mt-2 text-sm text-gray-500">
              Review and update your billing information to ensure accurate and timely payments.
            </p>
          </div>
          
          {/* Email Section */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800">Email address</h2>
            <p className="mt-2 text-sm text-gray-500">
              Invoice will be sent to this email address.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-2/3 flex flex-col items-start space-y-8">
          {/* Payment Methods */}
          <div className="space-y-4">
            {/* Master Card (Card 1) */}
            <div
              className="w-[532px] flex items-center p-4 bg-white rounded-lg border border-gray-200 cursor-pointer"
              onClick={() => setSelectedCard('mastercard')}
            >
              <input
                type="checkbox"
                checked={selectedCard === 'mastercard'}
                onChange={() => setSelectedCard('mastercard')}
                className="w-6 h-6 mr-4 border border-gray-400 rounded-none cursor-pointer"
              />
              <img src="/visa1.svg" alt="Mastercard" width={40} height={16} className="mr-4" />
              <p className="text-sm">•••• •••• •••• 1573</p>
              <p className="text-sm text-gray-500 ml-4">Expiry 05/27</p>
              <div className="ml-auto">
                <img
                  src="/3dot.svg"
                  alt="Dots icon"
                  width={20}
                  height={20}
                  className="text-gray-400 cursor-pointer"
                />
              </div>
            </div>

            {/* Visa Card (Card 2) */}
            <div
              className="w-[532px] flex items-center p-4 bg-white rounded-lg border border-gray-200 cursor-pointer"
              onClick={() => setSelectedCard('visa')}
            >
              <input
                type="checkbox"
                checked={selectedCard === 'visa'}
                onChange={() => setSelectedCard('visa')}
                className="w-6 h-6 mr-4 border border-gray-400 rounded-none cursor-pointer"
              />
              <img src="/visa2.svg" alt="Visa" width={40} height={16} className="mr-4" />
              <p className="text-sm">•••• •••• •••• 7228</p>
              <p className="text-sm text-gray-500 ml-4">Expiry 10/26</p>
              <div className="ml-auto">
                <img
                  src="/3dot.svg"
                  alt="Dots icon"
                  width={20}
                  height={20}
                  className="text-gray-400 cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Billing Period & Plan Card (Card 3) */}
          <div className="w-[532px] bg-white rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="font-semibold">Billing Period</p>
                <p className="text-sm text-gray-500">Next billing on March 18, 2025</p>
              </div>
             <button
  className="w-[163px] h-[40px] text-xs font-medium text-gray-600 rounded-[10px] hover:bg-gray-200 transition-colors border mr-[-60px]"
  style={{ borderColor: '#DFE1E7' }}
>
  Change Billing Period
</button>

              <button className="text-gray-400 mr-[-45px]">
                <img src="/bellicon.svg" alt="Notification icon" width={40} height={40} />
              </button>
            </div>
            
            {/* Current Plan */}
            <div className="p-4  w-[532px] rounded-lg border border-gray-200">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">Basic Plan</h3>
                <button  className="w-[89px] h-[32px] text-xs font-medium text-gray-600 rounded-[6px] hover:bg-gray-200 transition-colors border"
  style={{ borderColor: '#DFE1E7' }}
>
                  Downgrade
                </button>
              </div>
              <p className="text-2xl font-bold text-gray-800">
                $29 <span className="text-sm font-normal text-gray-500">/ month</span>
              </p>
              <div className="border-t border-gray-200 mt-4 pt-4">
                <p className="text-gray-500 text-sm mt-1">All the basics for starting a new business</p>
              </div>

              <div className="flex justify-between items-center mt-4">
                <button className="text-red-500 text-sm font-medium">Change Plan</button>
                <button className="text-red-500 text-sm font-medium">Change Plan</button>
              </div>
            </div>
          </div>
            
          {/* Invoice Table Card (Card 4) */}
          <div className="w-[532px] bg-white rounded-lg p-6 border border-gray-200">
            <div className="grid grid-cols-4 text-sm font-medium text-gray-500 border-b border-gray-200 pb-2">
              <div className="col-span-1">Invoice #</div>
              <div className="col-span-1">Date</div>
              <div className="col-span-1">Plan</div>
              <div className="col-span-1 flex justify-between">
                <span>Amount</span>
                <span></span>
              </div>
            </div>
            <div className="mt-2 space-y-2">
              <div className="grid grid-cols-4 text-sm text-gray-800 items-center">
                <div className="col-span-1 font-medium">#018298</div>
                <div className="col-span-1 text-gray-500">Jan 20, 2025</div>
                <div className="col-span-1 text-gray-500">Pro Plan</div>
                <div className="col-span-1 flex justify-between items-center">
                  <span>$79</span>
                  <img src="/download.svg" alt="Download icon" width={32} height={32} className="text-gray-400 cursor-pointer" />
                </div>
              </div>
              <div className="grid grid-cols-4 text-sm text-gray-800 items-center">
                <div className="col-span-1 font-medium">#015274</div>
                <div className="col-span-1 text-gray-500">Feb 20, 2025</div>
                <div className="col-span-1 text-gray-500">Basic Plan</div>
                <div className="col-span-1 flex justify-between items-center">
                  <span>$29</span>
                  <img src="/download.svg" alt="Download icon" width={32} height={32} className="text-gray-400 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Email Address (Card 5) */}
          <div className="w-[532px]">
            <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-800">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="emailAddress"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              placeholder="robertjohnson@gmail.com"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentBillingTab;

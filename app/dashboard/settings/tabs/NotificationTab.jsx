import React, { useState } from 'react';

const NotificationTab = () => {
  const [notifications, setNotifications] = useState({
    transactionConfirmation: true,
    transactionEdited: false,
    transactionInvoice: true,
    transactionCancelled: true,
    transactionRefund: true,
    paymentError: false,
  });

  const handleToggle = (key) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const Switch = ({ isToggled, onToggle }) => (
    <div
      onClick={onToggle}
      className={`relative w-12 h-6 rounded-full cursor-pointer transition-colors duration-300 ${isToggled ? 'bg-[#F34147]' : 'bg-[#ECEFF3]'}`}
    >
      <div
        className={`absolute left-0 top-0 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isToggled ? 'translate-x-full' : 'translate-x-0'}`}
      ></div>
    </div>
  );

  return (
    <div className="p-8 min-h-screen font-sans text-gray-800">
      <div className="max-w-4xl mx-auto flex">
        {/* Left Section - Push Notifications */}
        <div className="w-1/3 pr-8">
          <h2 className="text-xl font-semibold text-gray-800">Push Notifications</h2>
          <p className="mt-2 text-sm text-gray-500">
            Get alerts for new orders, order processing updates, and when orders are completed or canceled.
          </p>
        </div>

        {/* Right Section - Notification Toggles */}
        <div className="w-2/3 space-y-6">
          <div className="flex justify-between items-center py-2">
            <div>
              <p className="font-medium text-gray-800">Transaction Confirmation</p>
              <p className="mt-1 text-sm text-gray-500">Sent automatically to the customer after they place their order.</p>
            </div>
            <Switch
              isToggled={notifications.transactionConfirmation}
              onToggle={() => handleToggle('transactionConfirmation')}
            />
          </div>

          <div className="flex justify-between items-center py-2">
            <div>
              <p className="font-medium text-gray-800">Transaction Edited</p>
              <p className="mt-1 text-sm text-gray-500">Sent to the customer after their order is edited (if you select this option).</p>
            </div>
            <Switch
              isToggled={notifications.transactionEdited}
              onToggle={() => handleToggle('transactionEdited')}
            />
          </div>

          <div className="flex justify-between items-center py-2">
            <div>
              <p className="font-medium text-gray-800">Transaction Invoice</p>
              <p className="mt-1 text-sm text-gray-500">Sent to the customer when the order has an outstanding balance.</p>
            </div>
            <Switch
              isToggled={notifications.transactionInvoice}
              onToggle={() => handleToggle('transactionInvoice')}
            />
          </div>

          <div className="flex justify-between items-center py-2">
            <div>
              <p className="font-medium text-gray-800">Transaction Cancelled</p>
              <p className="mt-1 text-sm text-gray-500">Sent automatically to the customer if their order is cancelled (if you select this option).</p>
            </div>
            <Switch
              isToggled={notifications.transactionCancelled}
              onToggle={() => handleToggle('transactionCancelled')}
            />
          </div>

          <div className="flex justify-between items-center py-2">
            <div>
              <p className="font-medium text-gray-800">Transaction Refund</p>
              <p className="mt-1 text-sm text-gray-500">Sent automatically to the customer if their order is refunded (if you select this option).</p>
            </div>
            <Switch
              isToggled={notifications.transactionRefund}
              onToggle={() => handleToggle('transactionRefund')}
            />
          </div>

          <div className="flex justify-between items-center py-2">
            <div>
              <p className="font-medium text-gray-800">Payment Error</p>
              <p className="mt-1 text-sm text-gray-500">Sent automatically to the customer if their payment can't be processed during checkout.</p>
            </div>
            <Switch
              isToggled={notifications.paymentError}
              onToggle={() => handleToggle('paymentError')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationTab;
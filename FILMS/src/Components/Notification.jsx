import React, { useState } from "react";

function Notification() {
  const [isVisible, setIsVisible] = useState(true);

  const handleAgree = () => {
    setIsVisible(false);
    alert("Hai accettato le notifiche")
  };

  const handleDecline = () => {
    setIsVisible(false);
    alert("Non Hai accettato le notifiche")

  };

  return (
    <>
      {isVisible && (
        <div className="fixed inset-x-0 bottom-0 z-50 flex flex-col items-center justify-center bg-gray-800 text-white p-4 sm:p-6 lg:p-8">
          <p className="text-lg md:text-xl text-center mb-4">
            Do you want to receive our notifications for new products?
          </p>
          <div className="flex flex-col md:flex-row gap-2">
            <button
              className="bg-teal-600 w-full min-w-[200px] hover:bg-teal-700 px-4 py-2 text-sm md:text-base font-semibold rounded-lg mb-2 md:mb-0"
              onClick={handleAgree}
            >
              I Agree
            </button>
            <button
              className="bg-gray-600 w-full min-w-[200px] hover:bg-gray-700 px-4 py-2 text-sm md:text-base font-semibold rounded-lg"
              onClick={handleDecline}
            >
              I Decline
            </button>
          </div>
          <button className="mt-2 text-sm text-gray-300 underline">
            Change my preferences
          </button>
        </div>
      )}
    </>
  );
}

export default Notification;

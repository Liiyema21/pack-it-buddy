import React from 'react';

const OrderHistory = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <main className="p-5 ml-[350px]">
        <div className="bg-white p-5 rounded-lg shadow-md w-[90%] max-w-[750px] mt-16">
          <h1 className="text-2xl mb-5">Trip History</h1>
          <div className="flex justify-between items-center py-4 border-b border-gray-300">
            <div className="flex-1 mr-5">
              <h2 className="text-lg m-0">Trip to New Doornfontein</h2>
              <p className="text-gray-500 mt-1">Jan 1, 2024 - 10:00 AM</p>
              <p className="text-gray-500 mt-1">From: 4 9th St</p>
              <p className="text-gray-500 mt-1">To: 66 Lark st</p>
            </div>
            <div className="text-lg font-bold">R67.00</div>
          </div>

          <div className="flex justify-between items-center py-4 border-b border-gray-300">
            <div className="flex-1 mr-5">
              <h2 className="text-lg m-0">Trip to Johannesburg</h2>
              <p className="text-gray-500 mt-1">Jan 2, 2024 - 5:00 PM</p>
              <p className="text-gray-500 mt-1">From: 138 van beek St</p>
              <p className="text-gray-500 mt-1">To: 153 Commissioner st</p>
            </div>
            <div className="text-lg font-bold">R48.00</div>
          </div>

          <div className="flex justify-between items-center py-4">
            <div className="flex-1 mr-5">
              <h2 className="text-lg m-0">Trip to Ellis Park</h2>
              <p className="text-gray-500 mt-1">Jan 3, 2024 - 8:00 AM</p>
              <p className="text-gray-500 mt-1">From: 2 Herb St</p>
              <p className="text-gray-500 mt-1">To: 138 van beek st</p>
            </div>
            <div className="text-lg font-bold">R20.00</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OrderHistory;

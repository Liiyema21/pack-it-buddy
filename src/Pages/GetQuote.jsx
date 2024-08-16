import React, { useState, useEffect } from 'react';

const GetQuote = () => {
  const [formData, setFormData] = useState({
    consignmentType: 'Few items',
    fullName: '',
    email: '',
    phone: '',
    movingDate: ''
  });

  const [totalPrice, setTotalPrice] = useState(250);

  const consignmentPrices = {
    'Few items': 250,
    '1bed': 500,
    '2bed': 750,
    '3bed': 1000,
    '4bed': 1250,
    'Office': 1500
  };

  const distancePrice = parseFloat(localStorage.getItem('distancePrice')) || 0;

  useEffect(() => {
    updateTotalPrice();
  }, [formData.consignmentType]);

  const updateTotalPrice = () => {
    const consignmentPrice = consignmentPrices[formData.consignmentType] || 0;
    const totalPrice = consignmentPrice + distancePrice;
    setTotalPrice(totalPrice.toFixed(2));
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('totalPrice', totalPrice);
    // Redirect to Payment.html or the payment page as needed
    window.location.href = '/Payment.html'; // or use React Router to navigate
  };

  return (
    <main className="flex justify-center">
      <div className="bg-white p-5 rounded-lg shadow-md w-[90%] mt-20">
        <h2 className="text-xl mb-4">Get Quote</h2>

        <h3 className="text-lg mb-4">Total price: R<span id="total-price">{totalPrice}</span></h3>

        <form id="quote-form" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="consignment-type" className="block mb-2 font-medium">Consignment Type</label>
            <select
              id="consignment-type"
              name="consignmentType"
              value={formData.consignmentType}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md text-base focus:border-black focus:outline-none"
            >
              <option className="option" value="Few items">Just few items</option>
              <option className="option" value="1bed">1 Bedroom</option>
              <option className="option" value="2bed">2 Bedroom</option>
              <option className="option" value="3bed">3 Bedroom</option>
              <option className="option" value="4bed">4+ Bedroom</option>
              <option className="option" value="Office">Office Move</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="full-name" className="block mb-2 font-medium">Full Name</label>
            <input
              type="text"
              id="full-name"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md text-base focus:border-black focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md text-base focus:border-black focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block mb-2 font-medium">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md text-base focus:border-black focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="moving-date" className="block mb-2 font-medium">Estimated Moving Date</label>
            <input
              type="date"
              id="moving-date"
              name="movingDate"
              value={formData.movingDate}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md text-base focus:border-black focus:outline-none"
            />
          </div>
          <button type="submit" className="w-full p-2 bg-yellow-300 text-black rounded-md text-lg hover:bg-gray-800 transition-colors duration-200">
            Proceed to checkout
          </button>
        </form>
      </div>
    </main>
  );
};

export default GetQuote;

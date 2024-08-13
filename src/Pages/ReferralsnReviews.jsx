import React from 'react'
import { Link } from 'react-router-dom'
import ReviewConfirm from '../Components/ReviewConfirm'

const ReferralsnReviews = () => {
  return (
<section class="text-gray-600 body-font">
  <div>
    
  <div class="absolute inset-0 bg-gray-300 mt-20">
    <iframe
     width="100%"
     height="800px"
     frameborder="0"
     marginheight="0"
     marginwidth="0"
     title="map"
     scrolling="no"
     src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" ></iframe>
  </div>
  </div>
  <div class="container px-5 py-24 mx-auto flex">
    <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 lg:absolute left-96 z-10 shadow-md">
    <h2 class="text-gray-900 text-3xl mb-1 font-medium title-font">Referals & Reviews</h2>
      <p class="leading-relaxed mb-5 text-gray-600 text-lg">Refere a Friend</p>
      <div class="relative mb-4">
        <label for="name" class="leading-7 text-sm text-gray-600">Friend's Name</label>
        <input type="name" id="name" name="name"  placeholder="Friend's Name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
      </div>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Friend's Email</label>
        <input type="email" id="email" name="email"  placeholder='Email address' class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
      </div>
      <Link
      to='/ReviewConfirm'
      className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 items-center justify-center flex bg-[#131a4b] rounded-lg text-white font-bold text-lg'
      >
      <button >Send Referral</button>
      </Link>

      <p class="text-xl text-gray-500 mt-3">Leave a Review</p>

      <div class="relative mb-4">
        <label for="name" class="leading-7 text-sm text-gray-600">Your Full Name</label>
        <input type="name" id="name" name="name" placeholder=' Full Name' class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
      </div>

      <div class="relative mb-4">
        <label for="message" class="leading-7 text-sm text-gray-600">Enter your Review</label>
        <textarea id="message" name="message"  placeholder='Write your review here' class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <Link
      to='/ReviewConfirm'
      className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 items-center justify-center flex bg-[#131a4b] rounded-lg text-white font-bold text-lg'
      >
      <button >Send Review</button>
      </Link>
    </div>
  </div>
</section>

  )

}

export default ReferralsnReviews
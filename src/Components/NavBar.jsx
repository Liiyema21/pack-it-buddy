import React, {useState} from 'react'
import{FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PackitByddyLogo from '../Assets/PLogo.png'
import ReferralsnReviews from '../Pages/ReferralsnReviews'
import Forwarderform from '../Forms/Forwarderform'
import Support from '../Pages/Support';
import DealsAndDiacounts from '../Pages/DealsAndDiacounts';


const NavBar = () => {
    const [nav, setNav] = useState(false);

  return (
    <nav className="flex justify-between items-center w-full h-20
    px-4 text-white bg-[#131a4b] fixed">
                <div> 
          <img src={PackitByddyLogo} alt="Our Logo" 
          className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] text-3xl mb-12"/>
          </div>
        <ul className="hidden md:flex">
        <div 
        className="">
        <Link
         className=" px-2 cursor-pointer capitalize font-medium
    text-gray-500 hover:scale-105 hover:text-amber-400 duration-200"
         to='/Forwarderform'>Register as a forwarder</Link>
        <Link
         className=" px-2 cursor-pointer capitalize font-medium
    text-gray-500 hover:scale-105 hover:text-amber-400 duration-200"
         to='/OrderHistory'>Order History</Link>
        <Link 
        className="px-4 cursor-pointer capitalize font-medium
    text-gray-500 hover:scale-105 hover:text-amber-400 duration-200"
         to='/DealsAndDiacounts'>My Deals & Discounts</Link>
        <Link 
        className="px-4 cursor-pointer capitalize font-medium
    text-gray-500 hover:scale-105 hover:text-amber-400 duration-200"
        to='/ReferralsnReviews'>Refferals & Reviews</Link>
        <Link 
        className="px-4 cursor-pointer capitalize font-medium
    text-gray-500 hover:scale-105 hover:text-amber-400 duration-200" 
        to='/Support'>Support</Link>

        </div>

        </ul>
        <div 
        onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500
        md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30}/>}

      </div>
      {nav && (
 <ul className="flex flex-col justify-center items-center 
  absolute right-1 center-0 mt-96 h-screen bg-[#131a4b] text-gray-500">
       <li 
       className="px-4 cursor-pointer capitalize py-6
        text-4xl">
        <Link 
        className=" px-4 mr-10" to='/'>Home</Link>
         </li> 
       <li 
       className="px-4 cursor-pointer capitalize py-6
        text-4xl">
        <Link 
        className=" px-4 mr-10" to='/OrderHistory'>Order History</Link>
         </li> 
         <li
        className="px-4 cursor-pointer capitalize py-6
        text-4xl">
        
         <Link className=" px-4 mr-10" to='/DealsAndDiacounts'>My Deals & Discounts</Link>
         </li>
         <li
        className="px-4 cursor-pointer capitalize py-6
        text-4xl">
        
         <Link className=" px-4 mr-10" to='/ReferralsnReviews'>Refferals & Reviews</Link>
         </li>
         <li
        className="px-4 cursor-pointer capitalize py-6
        text-4xl">
        
         <Link className="px-4 mr-10" to='/Support'>Support</Link>
  
         </li>
   
 </ul>

      )}
    </nav>
  )
}

export default NavBar
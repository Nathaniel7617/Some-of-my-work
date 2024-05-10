import React from 'react';
import Logo from '../../assets/logo2.png';
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from './DarkMode';
import { FaCaretDown } from "react-icons/fa";


const Menu = [
    {
        id: 1,
        name: "Home",
        link: "/#",
    },
    {
        id: 2,
        name: "Top Rated",
        link: "/#services",
    },
    {
        id: 3,
        name: "Native",
        link: "/#",
    },
    {
        id: 4,
        name: "Co-operate",
        link: "/#",
    },
    {
        id: 5,
        name: "Casual",
        link: "/#",
    },
    {
        id: 6,
        name: "Shoes",
        link: "/#",
    },
];

const DropdownLinks = [
   {
    id: 1,
    name: "Trendrings",
    link: "/#",
   },
   {
    id: 2,
    name: "Best Selling",
    link: "/#",
   },
   {
    id: 3,
    name: "Top Designs",
    link: "/#",
   },
];


const Navbar = ({handleOrderPopup}) => {
  return (
 <div className='shadow-md bg-white 
 dark:bg-gray-900 dark:text-white
 duration-200 relative z-40'>
   {/* upper Navbar */}
   <div className='bg-primary/40'>
     <div className='container flex
     justify-between items-center'>
   <div>
       <a href="#">
           <img src={Logo} alt="Logo" 
           className='w-32 dark:p-4 dark:rounded-full
            dark:bg-gray-300'/>
       </a>
   </div>

   {/* search bar */}
   <div className='flex justify-between
   items-center gap-4'>
     <div className='relative group hidden
      sm:block'>
       <input 
       type="text" placeholder='search'
       className='w-[200px] sm:w-[200px]
        group-hover:w-[300px] transition-all
        duration-300 rounded-full border 
        border-gray-300 px-2 py-1 
        focus:outline-none focus:border-1 
        focus:border-primary dark:border-gray-500
        dark:bg-gray-800' />
      <IoMdSearch 
      className='text-gray-500
      group-hover:text-primary absolute
      top-1/2 -translate-y-1/2 right-3'
      />
     </div>

        {/* order button */}
        <button
       onClick={() => handleOrderPopup()}
        className='bg-gradient-to-r from-primary
        to-secondary transition-all duration-200
        text-white py-1 px-4 rounded-full flex
        items-center gap-3 group'
       >
<span onClick={() => handleOrderPopup()} 
      className='group-hover:block
      hidden transition-all duration-200'>
  0rder {/* This should be "Order" */}
</span>

        <FaCartShopping className='text-xl
        text-white drop-shadow-sm 
        cursor-pointer'/>
       </button>

       {/* Darkmode switch */}
       <div>
        <DarkMode />
       </div>
      </div>
     </div>
   </div>

    {/* lower Navbar */}
    <div className='flex justify-center'>
        <ul className='sm:flex hidden items-center
        gap-4'>
            {Menu.map((data) =>(
                <li key={data.id}>
                    <a href={data.link}
                    className='inline-block px-4
                    hover:text-primary font-semibold 
                    duration-200 '
                    >
                    {data.name}</a>
                </li>
              ))}
              {/* dropdown and links */}
            <li className='group relative
            cursor-pointer'>
            <a href="#"
               className='flex items-center
               gap-[2px] font-semibold py-2
               hover:text-primary'>
                Trending Designs
                <span>
                <FaCaretDown
                 className='transition-all
                 duration-200 
                 group-hover:rotate-100' />
                </span>
                </a>
                <div className='absolute z-[9999]
                hidden group-hover:block w-[150px]
                rounded-md bg-white p-2 
                text-black shadow-md'>
                    <ul>
                      {DropdownLinks.map((data) =>(
                        <li key={data.id}>
                           <a href={data.link}
                           className='inline-block w-full
                           rounded-md p-2 hover:bg-primary/20'
                           >
                            {data.name}
                           </a>
                        </li>
                      ))}
                    </ul>
                </div>
            </li>
        </ul>
    </div>
 </div>
  )
}

export default Navbar

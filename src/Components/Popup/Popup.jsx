import React from 'react';
import { IoCloseCircle } from "react-icons/io5";
import Button from '../Shared/Button';

const Popup = ({ orderPopup, setOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div className='popup'>
          <div className='h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm'>
            <div className="flex top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-gray-200 dark:bg-gray-900 rounded-md duration-200 w-[300px]">
              {/* Header section */}
              <div className='flex items-center justify-between w-full'>
                <h1 className="text-xl font-semibold">Order Now</h1>
              </div>
            </div>
            {/* form section */}
            <div className='grid grid-col justify-center'>
            <div className='mt-4 grid grid-col 
            justify-center bg-gray-400 w-96 rounded-xl '>
            <IoCloseCircle className="text-gray-500 
          hover:text-red-500 
            cursor-pointer text-2xl grid grid-col
            rounded-full justify-center items-center" 
            onClick={() => setOrderPopup(false)} />
              <input type="text"
              placeholder='Name'
               className='w-80 rounded-full border 
               border-gray-300 dark:border-gray-500
                dark:bg-gray-800 px-2 py-1 mb-4 mt-5' />

              <input type="email"
               placeholder='Email'
               className='w-80 rounded-full border 
               border-gray-300 dark:border-gray-500
                dark:bg-gray-800 px-2 py-1 mb-4' />

              <input type="text"
               placeholder='Address'
               className='w-80 rounded-full border 
             border-gray-300 dark:border-gray-500
              dark:bg-gray-800 px-2 py-1 mb-4' />

              

              <div className='flex justify-center 
              mb-14 mt-2'>
                <Button text="Order Now" 
                bgColor={"bg-primary"} 
                textColor={"text-white"} />
              </div>
            </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
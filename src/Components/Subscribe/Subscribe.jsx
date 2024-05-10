import React from 'react';
import Banner from '../../assets/website/charcoal-blue pattern.jpg';

const BannerImg = {
    backgroundImage: `url(${Banner})`, // Use backticks for template literals
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
}

const Subscribe = () => {
  return (
    <div data-aos='zoom-in' 
    className=' bg-gray-100 
    dark:bg-white-800 text-gray-200' 
    style={BannerImg}>
      <div className='container 
      backdrop-blur-sm py-10'>
        <div className='space-y-6 max-w-xl mx-auto'>
            <h1 className='text-2xl !text-center
            sm:text-left sm:text-4xl text-gray-300 font-semmibold mb-2'
            >Get Notifications About New Products</h1>
            <input data-aos="fade-up"
             type="text" 
             placeholder='Enter your email'
             className='w-full p-3 rounded-2xl bg-gray-200'/>
        </div>
      </div>
    </div>
  )
}

export default Subscribe;
import React from 'react';
import Img1 from '../../assets/topProducts/agbada4.jpg';
import Img2 from '../../assets/topProducts/casual-wear4.jpg';
import Img3 from '../../assets/topProducts/shoe5.jpeg';
import Img4 from '../../assets/topProducts/suit2.jpeg';
import Img5 from '../../assets/topProducts/shoe7.jpeg';
import Img6 from '../../assets/topProducts/mono-embroidery1.jpg';
import { FaStar } from 'react-icons/fa6';
import Button from '../Shared/Button';

const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Royalty",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
        id: 2,
        img: Img2,
        title: "Casual-Wear",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
        id: 3,
        img: Img3,
        title: "smooth-Footwear",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
        id: 4,
        img: Img4,
        title: "Confidence",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
        id: 5,
        img: Img5,
        title: "King`s-Footty",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
        id: 6,
        img: Img6,
        title: "Mono-Embroidery",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
]

const TopProducts = ({ handleOrderPopup }) => {
    return (
        <div className='py-10 dark:bg-gray-950'>
        <div className='container'>
            {/* Header section */}
            <div className='text-left mb-24 '>
                <p data-aos="fade-up" className='text-sm text-primary'>Top Rated Products for you</p>
                <h1 data-aos="fade-up" className='text-3xl font-bold dark:text-gray-300'>Best Products</h1>
                <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi optio temporibus deserunt!</p>
            </div>
            {/* Body section */}
            <div className='grid grid-cols-1 sm:grid-cols-2 
            md:grid-cols-3 gap-20 md:gap-5 
            place-items-center dark:text-gray-300'>
                {ProductsData.map((data) => (
                    <div data-aos="zoom-in"
                    key={data.id} 
                    className='rounded-2xl overflow-hidden
                     bg-white dark:bg-gray-800 
                     group max-w-[300px] shadow-xl 
                     duration-high hover:bg-black/80 
                     dark:hover:bg-primary 
                     hover:text-white'>
                        {/* Image section */}
                        <div className='h-[180px]'>
                            <img src={data.img} alt={data.title} className='w-full h-auto max-w-[140px] block mx-auto transform group-hover:scale-105 duration-300 rounded-2xl' />
                        </div>
                        {/* details section */}
                        <div className='p-4 text-center'>
                            {/* star rating */}
                            <div className='w-full flex items-center justify-center gap-1'>
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                            </div>
                            <h1 className='text-xl font-bold'>{data.title}</h1>
                            <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{data.description}</p>
                            <div
                                className="flex flex-col items-center 
                                lg:flex-row lg:justify-center lg:py-8 
                                lg:px-2 sm:py-2 md:py-4 md:px-8 sm:mt-10 
                                md:mt-10 sm:mb-10 mb-10"
                            >
                                <Button
                                    text='Order Now'
                                    bgColor='bg-primary'
                                    textColor='text-white'
                                    handler={handleOrderPopup}/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    )
}

export default TopProducts;
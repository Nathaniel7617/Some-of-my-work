import React from 'react';
import Img1 from '../../assets/products/agbada6.jpg';
import Img2 from '../../assets/products/cooperate-shirt.jpg';
import Img3 from '../../assets/products/shoes2.jpg';
import Img4 from '../../assets/products/casual-shirt.jpg';
import Img5 from '../../assets/products/senator2.jpg';
import { FaStar } from "react-icons/fa";
import Button from '../Shared/Button';



const ProductsData = [
    {
     id: 1,
     img: Img1,
     title: "Native-Agbada",
     rating: 5.0,
     price: "N150,000",
     aosDelay: "0",
    },
    {
     id: 2,
     img: Img2,
     title: "Cooperate",
     rating: 4.5,
     price: "N10,000",
     aosDelay: "200",
   },
 { 
   id: 3,
   img: Img3,
   title: "Shoes",
   rating: 4.7,
   price: "N65,000",
   aosDelay: "400",
 },
 { 
    id: 4,
    img: Img4,
    title: "Casual",
    rating: 4.7,
    price: "N35,000",
    aosDelay: "600",
  },
  { 
    id: 5,
    img: Img5,
    title: "Native-Senator",
    rating: 4.7,
    price: "N70,000",
    aosDelay: "600",
  },    
]


const Products = () => {
    return (
      <div className='py-10 dark:bg-gray-900'>
        <div className='container dark:bg-gray-900'>
          {/* Header section */}
          <div className='text-center 
          mb-10 max-w-[600px] mx-auto'>
            <p className='text-sm text-primary 
            dark:text-gray-300'
            >Top Selling Products for you</p>
            <h1 data-aos="fade-up" 
            className='text-3xl font-bold 
            dark:text-gray-100'>Products</h1>
            <p data-aos="fade-up" 
            className='text-xs text-gray-400 
            dark:text-gray-300'
            >Lorem ipsum dolor sit amet, consectetur 
            adipisicing elit. Eligendi optio temporibus 
            deserunt!</p>
          </div>
          {/* Body section */}
          <div>
            <div className='grid grid-cols-1 
            sm:grid-cols-3 md:grid-cols-4 
            lg:grid-cols-5 place-items-center gap-5'>
              {/* card section */}
              {ProductsData.map((data) => (
                <div 
                data-aos="fade-up" 
                data-aos-delay={data.aosDelay} 
                key={data.id} 
                className='space-y-3'>
                  <img src={data.img} alt="" className='h-[220px] w-[150px] object-cover rounded-md' />
                  <div>
                    <h3 className='font-semibold dark:text-gray-300'>{data.title}</h3>
                    <p className='text-sm text-gray-600 dark:text-gray-300'>{data.price}</p>
                    <div className='flex items-center gap-1'>
                      <FaStar className='text-yellow-400' />
                      <span className='dark:text-gray-300'>{data.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Button section */}
            <div 
            data-aos="fade-up" 
            data-aos-delay= "100"
            className="flex items-center mt-7 
            justify-center lg:flex-row lg:justify-center 
            lg:py-8 lg:px-2 sm:py-4 md:py-4 
            md:px-8 sm:mt-10 md:mt-10">
            <Button 
            text='View All' 
            bgColor='bg-primary' 
            textColor='text-white' />
            </div>
          </div>
        </div>
      </div>
    )
  }

  export default Products;
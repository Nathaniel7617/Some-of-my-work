import React from 'react';
import Slider from 'react-slick';
import Image1 from '../../assets/testimonials/Victor.jpg';
import Image2 from '../../assets/testimonials/David.jpg';
import Image3 from '../../assets/testimonials/Mr-Segun.jpg';
import Image4 from '../../assets/testimonials/Bright.jpg';
import Image5 from '../../assets/testimonials/Mr-Solomon.jpg';
import Image6 from '../../assets/testimonials/Osas.jpg';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const TestimonialsData = [
    {
        id: 1,
        name: 'Victor',
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, alias explicabo necessitatibus quo illo ipsa omnis nam autem aut similique!",
        img: Image1,
    },
    {
        id: 2,
        name: 'David',
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, alias explicabo necessitatibus quo illo ipsa omnis nam autem aut similique!",
        img: Image2,
    },
    {
        id: 3,
        name: 'Mr-Segun',
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, alias explicabo necessitatibus quo illo ipsa omnis nam autem aut similique!",
        img: Image3,
    },
    {
        id: 4,
        name: 'Mr-Bright',
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, alias explicabo necessitatibus quo illo ipsa omnis nam autem aut similique!",
        img: Image4,
    },
    {
        id: 5,
        name: 'Mr-Solomon',
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, alias explicabo necessitatibus quo illo ipsa omnis nam autem aut!",
        img: Image5,
    },
    {
        id: 6,
        name: 'Osas',
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, alias explicabo necessitatibus quo illo ipsa omnis nam autem aut similique!",
        img: Image6,
    },
];

const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 2000,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4520,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: false,
    responsive: [
        {
            breakpoint: 10000,
            settings: {
                slidesToScroll: 3,
                slidesToScroll: 1,
                infinite: true,
            },
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToScroll: 3,
                slidesToScroll: 1,
                infinite: true,
            },
        },
        {
            breakpoint: 640,
            settings: {
                slidesToScroll: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

const Testimonials = () => {
    return (
        <div className='py-10 sm:overflow-hidden dark:bg-gray-950'>
            <div className="container mb-5">
                {/* header section */}
                <div className='text-center mb-10 max-w-[600px] mx-auto'>
                    <p data-aos="zoom-in" className='text-sm text-primary dark:text-gray-300'>What our customers are saying</p>
                    <h1 data-aos="fade-up" className='text-3xl font-bold dark:text-gray-100'>Testimonials</h1>
                    <p data-aos="fade-up" className='text-xs text-gray-400 dark:text-gray-300'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi optio temporibus deserunt!</p>
                </div>
                {/* testimonials cards and quote section */}
                <div data-aos='zoom-in' className="flex flex-col sm:flex-row gap-10 justify-center">
                    {/* Testimonial Cards */}
                    <Slider {...settings} className='w sm:w-40 lg:w-40 md:w-40'>
                        {TestimonialsData.map((data) => (
                            <div key={data.id} className='overflow-hidden gap-4 shadow-lg py-8 px-6 dark:bg-gray-800 bg-gray-100 rounded-xl'>
                                <div className='mb-4'>
                                    <img src={data.img} alt="" className='rounded-full w-20 h-20' />
                                </div>
                                <div className='flex flex-col items-center gap-4'>
                                    <div className='space-y-3'>
                                        <FaQuoteLeft className='text-gray-500' />
                                        <p className='text-xs text-gray-500 dark:text-gray-200'>{data.text}</p>
                                        <FaQuoteRight className='text-gray-500 ml-32' />
                                        <h1 className='text-xl font-bold text-black/80 dark:text-gray-200'>{data.name}</h1>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                    {/* Quote Section */}
                    <div className='flex flex-col justify-center items-center'>
                        <FaQuoteLeft  className='text-gray-300 flex 
                        justify-end items-start flex-col text-4xl mb-6 mr-52' />
                        <p  className="text-center italic text-gray-600 dark:text-gray-300 w-2/3">Success is not final, failure is not fatal: It is the courage to continue that counts.</p>
                        <FaQuoteRight  className='text-gray-300 text-4xl ml-52 mt-5' />
                        <footer  className="mt-2 text-sm text-center italic text-gray-600 dark:text-gray-300 sm:mb-10">- Winston Churchill</footer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;

import React from 'react';
import Image1 from '../../assets/hero/sale.png';
import Image2 from '../../assets/hero/agbada1.png';
import Image3 from '../../assets/hero/cooperate shirts1.png';
import Image4 from '../../assets/hero/casual1.png';
import Image5 from '../../assets/hero/shoe1.png';
import Image6 from '../../assets/hero/tie1.png';
import Button from '../Shared/Button';
import Slider from 'react-slick';

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Huge percentage  off this week on All products",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, alias explicabo necessitatibus!"
  },
  {
    id: 2,
    img: Image2,
    title: "Upto 20% off on every 3 pairs",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, alias explicabo necessitatibus quo illo ipsa omnis nam autem aut similique!"
  },
  {
    id: 3,
    img: Image3,
    title: "Upto 20% off on every 5 pairs",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, alias explicabo necessitatibus quo illo ipsa omnis nam autem aut similique!"
  },
  {
    id: 4,
    img: Image4,
    title: "Upto 20% off on every 5 pairs",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, alias explicabo necessitatibus quo illo ipsa omnis nam autem aut similique!"
  },
  {
    id: 5,
    img: Image5,
    title: "Upto 20% off on every 5 pairs",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, alias explicabo necessitatibus quo illo ipsa omnis nam autem aut similique!"
  },
  {
    id: 6,
    img: Image6,
    title: "Upto 20% off on every 10 pairs",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, alias explicabo necessitatibus quo illo ipsa omnis nam autem aut similique!"
  },
]

const Hero = ({handleOrderPopup}) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
    slidesToScroll: 1,

  };

  return (
    <div className='relative overflow-hidden 
    min-h-[500px] sm:min-h-[650px] 
    bg-gray-100 flex justify-center 
    items-center dark:bg-gray-950 
    dark:text-white duration-200'>
      {/* background pattern */}
      <div className='h-[700px] w-[700px] 
      bg-primary/40 absolute -top-1/2 right-0 
      rounded-3xl rotate-45 -z-9'></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((image) => (
            <div key={image.id}>
              <div className='grid grid-cols-1 sm:grid-cols-2'>
                {/* text content section */}
                <div className='flex flex-col 
                justify-center gap-4 pt-12 sm:pt-0 
                text-center sm:text-left order-2 sm:order-1 
                relative z-10 lg:mt-32'>
                  <h1 
                  data-aos="zoom-out"
                  data-aos-once="true"
                  data-aos-duration="500"
                  className='text-5xl sm:text-6xl 
                  lg:text-7xl font-bold 
                  dark:text-white'>
                   {image.title}
                    </h1>
                  <p 
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="500"
                  className='
                   dark:text-white text-lg'
                   >
                    {image.description}
                  </p>
                  <div 
                  data-aos="zoom-out"
                  data-aos-once="true"
                  data-aos-duration="500"
                  className="flex flex-col 
                  items-center lg:flex-row 
                  lg:justify-center lg:py-8 
                  lg:px-2 sm:py-4 md:py-4 mb-10 
                  md:px-8 sm:mt-10 sm:mb-20 md:mt-10">
                    <Button 
                    text='Order Now' 
                    bgColor='bg-primary' 
                    textColor='text-white'
                    handler={handleOrderPopup} />
                  </div>
                </div>
                {/* image section */}
                <div className='order-1 sm:order-2'>
                  <div
                    data-aos="zoom-in"
                    data-aos-infinite="true"
                    className='relative z-10'>
                    <img 
                    src={image.img} alt="" 
                    className='w-[300px] h-[300px] 
                    sm:h-[450px] sm:w-[450px] lg:scale-150 
                    sm:scale-120 object-contain mx-auto 
                    sm:mb-40' />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Hero;
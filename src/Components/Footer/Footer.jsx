import React from 'react';
import Logo from '../../assets/logo2.png';
import Banner from '../../assets/website/footer-pattern.jpg';
import { FaInstagram, FaFacebook, FaLinkedin, FaLocationArrow, FaMobileAlt } from "react-icons/fa";
import {MdLocationOn} from "react-icons/md";

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
}

const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Contact",
        link: "/#contact",
    },
    {
        title: "Blog",
        link: "/#blog",
    },
]

const Footer = () => {
    return (
<div style={BannerImg} className='filter grayscale contrast-100 opacity-98'>
            <div className='container'>
                <div data-aos='zoom-in' className='grid md:grid-cols-3 pb-44 pt-5'>
                    {/* Company details */}
                    <div className='py-8 px-4'>
                        <a href="#">
                            <img src={Logo} alt="Logo" className='w-24 p-4 rounded-full bg-gray-300 mb-5' />
                        </a>
                        <p className='text-gray-200'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, voluptate blanditiis at perspiciatis officia dolorem.
                        </p>
                    </div>
                    {/* Footer Links */}
                    <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                        { /* Render first set of links */}
                        <div className='py-8 px-4'>
                            <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-3 text-gray-200'>Important Links</h1>
                            <ul className='flex flex-col gap-3'>
                                {FooterLinks.map((link) => (
                                    <li className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200' key={link.title}>
                                        <span>{link.title}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        { /* Render second set of links */}
                        <div className='py-8 px-4'>
                            <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-3 text-gray-200'>Links</h1>
                            <ul className='flex flex-col gap-3'>
                                {FooterLinks.map((link) => (
                                    <li className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200' key={link.title}>
                                        <span>{link.title}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        { /* Social Links */}
        <div className='py-8 px-4 col-span-2
             sm:col-auto'>
             <h1 className='text-xl font-bold
            sm:text-left mb-3 text-gray-300'
            >Socials</h1>
        <div className='flex items-center 
                gap-3 mt-6'>
                  <a href="#">
                  <FaInstagram 
                  className='text-3xl
                   hover:text-gray-950
                   duration-300 text-gray-300'/>
                  </a>
                  <a href="#">
                  <FaFacebook 
                  className='text-3xl
                   hover:text-gray-950
                   duration-200 text-gray-300'/>
                  </a>
                  <a href="#">
                  < FaLinkedin 
                  className='text-3xl
                   hover:text-gray-950
                   duration-200 text-gray-300'/>
                  </a>
                </div>
              <div>
                <div className="flex items-center gap-3 
                text-gray-300">
                <FaLocationArrow />
                <p>Olodi-Apapa</p>
                </div>
                <div className="flex items-center gap-3 mt-3 
                text-gray-300">
                <FaMobileAlt />
                <p>+2347067266435</p>
                </div>
                <div className="flex items-center gap-3 mt-3 
                text-gray-300">
                <MdLocationOn />
                 <p>Lagos, Nigeria</p>
                </div>
              </div>
             </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
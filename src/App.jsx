import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Products from './Components/Products/Products';
import TopProducts from './Components/TopProducts/TopProducts';
import Banner from './Components/Banner/Banner';
import Subscribe from './Components/Subscribe/Subscribe';
import Testimonials from './Components/Testimonials/Testimonials';
import Footer from './Components/Footer/Footer';
import Popup from './Components/Popup/Popup';

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
   setOrderPopup(!orderPopup);
  };


  React.useEffect(() => {
    AOS.init({
       offset: 100,
       duration: 800,
       easing: "ease-in-sine",
       delay: 100,
    })
  }, []);

  return (
    <div className='dark:bg-gray-900 dark:text-gray-300 duration-200'>
      <Navbar handleOrderPopup={handleOrderPopup}/>
      <Hero handleOrderPopup={handleOrderPopup}/>
      <Products />
      <TopProducts />
      <Banner />
      <Subscribe />
      <Products />
      <Testimonials />
      <Footer />
      <Popup orderPopup={orderPopup}
      setOrderPopup={setOrderPopup}/>
    </div>
  );
};

export default App;
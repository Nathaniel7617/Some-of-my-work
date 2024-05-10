import React from 'react';

const Button = ({ text, bgColor, textColor, handler }) => {
  const handleClick = () => {
    if (handler) {
      handler();
    }
  };

  return (
    <div 
      className={`${bgColor} ${textColor} 
      cursor-pointer hover:scale-105 
      duration-300 px-8 py-3 rounded-full
      w-3/ text-center absolute z-10
      group-hover:bg-white group-hover:text-primary`}
      onClick={handleClick}
    >
      {text}
    </div>
  );
};

export default Button;
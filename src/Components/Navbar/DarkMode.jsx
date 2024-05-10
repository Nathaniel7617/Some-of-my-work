import React, { useEffect } from 'react';
import LightButton from '../../assets/website/light-mode-button.jpg';
import DarkButton from  '../../assets/website/dark-mode-button.jpg';

const DarkMode = () => {
    const [theme, setTheme] = React.useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );

    useEffect(() => {
        try {
            localStorage.setItem("theme", theme);
            const element = document.documentElement;
            if (theme === "dark") {
                element.classList.add("dark");
            } else {
                element.classList.remove("dark");
            }
        } catch (error) {
            console.error("Error while setting theme in localStorage:", error);
        }
    }, [theme]);

    return (
        <div className='relative'>
            <img 
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                src={LightButton} 
                alt="" 
                className={`w-12 cursor-pointer absolute right-0 z-10 ${theme === "dark" ? "opacity-0" : "opacity-100" } transition-all duration-300 rounded-full scale-50`} 
            />
            <img 
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                src={DarkButton} 
                alt="" 
                className={`w-12 cursor-pointer ${theme === "light" ? "opacity-0" : "opacity-100" } transition-all duration-300 rounded-full scale-50`} 
            />
        </div>
    );
};

export default DarkMode;
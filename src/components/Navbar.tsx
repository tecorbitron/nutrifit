"use client"
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '@/assets/Nutrifit-Logo.webp';


const Navbar = () => {
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMenu, setIsMenu] = useState(false);


  useEffect(() => {
    let lastScrollY = 0;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Detect scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false); // Hide navbar on scroll up
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true); // Show navbar on scroll down
      }

      // Detect if scrolled down past a threshold
      setIsScrolledDown(currentScrollY > 50);

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenu]);


  return (
    <nav className='max-w-screen-xl m-auto px-4 relative w-full '>
      <nav className={`left-0 md:left-auto w-full md:w-fit text-black bg-white shadow md:rounded-full px-4 py-2 z-50 transition-transform duration-300 ${isScrolledDown ? 'md:fixed' : 'absolute'} ${isVisible ? 'translate-y-0 md:translate-y-4' : '-translate-y-full'}`}>
        <div className=" ">
          <div className="flex justify-between items-center h-fit space-x-8">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold ">
                <Image src={logo} alt='logo'
                  width={40} height={40} className='object-center object-cover' />
              </Link>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/about" className=" hover:text-gray-300">About Us</Link>
              <Link href="/services" className=" hover:text-gray-300">Services</Link>
              <Link href="/booking" className=" hover:text-gray-300">Booking</Link>
            </div>
            <div onClick={() => setIsMenu(!isMenu)} className="md:hidden hover:text-gray-300 cursor-pointer">
              <Menu />
            </div>
          </div>
        </div>
      </nav>

      {/* for mobile screen  */}
      {isMenu && <nav className='fixed top-0 left-0 z-50 md:hidden h-screen w-full text-black bg-white px-4 font-semibold '>
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold ">
              <Image src={logo} alt='logo'
                width={40} height={40} className='object-center object-cover' />
            </Link>
          </div>
          <div onClick={() => setIsMenu(!isMenu)} className="md:hidden hover:text-gray-300 cursor-pointer">
            <X />
          </div>
        </div>
        {/* Nav items  */}
        <div className="flex flex-col items-center space-y-5 mt-5">
          <Link href="/about" className=" hover:text-gray-300">About Us</Link>
          <Link href="/services" className=" hover:text-gray-300">Services</Link>
          <Link href="/booking" className=" hover:text-gray-300">Booking</Link>
        </div>
        <div className="absolute bottom-10 w-full text-center hover:text-gray-300 cursor-pointer">
          Available on the App Store
        </div>
      </nav>}

    </nav>
  );
};

export default Navbar;

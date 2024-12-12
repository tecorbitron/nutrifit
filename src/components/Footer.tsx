import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from '@/assets/Nutrifit-Full-Logo.webp';
import fbLogo from '@/assets/facebook-f-brands-solid.svg';
import instaLogo from '@/assets/instagram-brands-solid.svg';
import XLogo from '@/assets/x-twitter-brands-solid.svg';

const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-evenly items-center md:items-start text-center md:text-left gap-6">
          {/* Logo Section */}
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-bold ">
              <Image src={logo} alt='logo'
                width={200} height={200} className='object-center object-cover' />
            </Link>
          </div>

          {/* Company Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about-us" className=" hover:text-primaryColour">About Us</Link></li>
              <li><Link href="/ambassadors" className=" hover:text-primaryColour">Ambassadors</Link></li>
              <li><Link href="/privacy-policy" className=" hover:text-primaryColour">Privacy Policy</Link></li>
              <li><Link href="/terms-of-use" className=" hover:text-primaryColour">Terms of Use</Link></li>
              <li><Link href="/careers" className=" hover:text-primaryColour">Careers</Link></li>
              <li><Link href="/blog" className=" hover:text-primaryColour">Blog</Link></li>
              <li><Link href="/faq" className=" hover:text-primaryColour">FAQ</Link></li>
            </ul>
          </div>

          {/* Need Help */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Need Help</h3>
            <p className="hover:text-primaryColour mb-4">support@usenutrifit.com</p>
            <h3 className="text-lg font-medium text-gray-800 mb-4">Socials</h3>
            <div className="flex justify-evenly space-x-4">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <div className="w-12 h-12 bg-gray-200 hover:bg-primaryColour text-white rounded-full flex items-center justify-center">
                <Image src={fbLogo} alt='logo'
                width={14} height={14} className='object-center object-cover' />
                </div>
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <div className="w-12 h-12 bg-gray-200 hover:bg-primaryColour text-white rounded-full flex items-center justify-center">
                <Image src={instaLogo} alt='logo'
                width={20} height={20} className='object-center object-cover' />
                </div>
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <div className="w-12 h-12 bg-gray-200 hover:bg-primaryColour text-white rounded-full flex items-center justify-center">
                <Image src={XLogo} alt='logo'
                width={20} height={20} className='object-center object-cover' />
                </div>
              </Link>
            </div>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-4">Location</h3>
            <p className="hover:text-primaryColour">
              256 Chapman Road STE 105-4, <br />
              New Castle, DE
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

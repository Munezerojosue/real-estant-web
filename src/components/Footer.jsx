import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Vector from '../assets/Vector.png';
import Figmap from '../assets/Figmap.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 relative ">
      <div className="container mx-auto px-4">
        
        <div className="flex justify-between items-center mb-8">
         
          <div className="text-xl font-semibold text-white flex">
           <img src={Vector} alt="" className="mr-2"/> 
           <h1 className="mt-5">Kigali Property Hub</h1>
          </div>

          
          <div className="flex space-x-4">
            <h3 className="text-white">Flow US</h3>
            <a href="#" className="text-gray-300 hover:text-white ">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-300 hover:text-white ">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-300 hover:text-white ">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-300 hover:text-white ">
              <FaLinkedin />
            </a>
          </div>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-3">Subscribe</h3>
            <input
              type="email"
              placeholder="Your e-mail"
              className="bg-gray-800 text-gray-300 p-2 rounded mb-2 w-full"
            />
            <button className="bg-gray-700 text-gray-300 px-4 py-2 rounded flex items-center justify-center w-full">
              Send &rarr;
            </button>
            <p className="text-sm mt-2">
              Subscribe to our newsletter to receive our weekly feed.
            </p>
          </div>

          
          <div>
            <h3 className="text-lg font-semibold mb-3">Discover</h3>
            <ul className="space-y-2 text-white">
              <li>Musanze</li>
              <li>Kigali</li>
              <li>Rubavu</li>
              <li>Huye</li>
              <li>Rwamagana</li>
              <li>Nyanza</li>
              <li>Gasabo</li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-white">
              <li>About</li>
              <li>Contact</li>
              <li>FAQ's</li>
              <li>Blog</li>
              <li>Pricing Plans</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
            <p className="text-white">kigali@phub.com</p>
            <p className="text-white">(+250) 788-888-888</p>
          </div>

          
          <div>
            <h3 className="text-lg font-semibold mb-3">Our Address</h3>
            <p className="text-white">99 Musanze, 3rd Floor</p>
            <p className="text-white">RWA Kigali, CA 1980</p>
          </div>
        </div>

        
        

        <div className="absolute bottom-0 right-0 mb-4 mr-4">
          <h3 className="text-lg font-semibold mb-3">Get Location</h3>
          <img
            src={Figmap}
            alt="Location map"
            className="rounded w-48"
          />
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-white">Copyright © 2024. CGA</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { motion } from 'framer-motion';
import { FaShoppingBag, FaWhatsapp, FaFacebook, FaInstagram, } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";
import zoharieLogo from "../assets/logo.png";

export default function Homepage() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#2F2F2F] text-white overflow-hidden">
      {/* Zoharie Logo */}
      <motion.img
        src={zoharieLogo}
        alt="Zoharie Logo"
        className="absolute top-8 sm:top-12 md:top-16 lg:top-20 max-w-full h-auto object-contain"
        style={{
          maxWidth: "300px",
          filter: "invert(1) brightness(1.2) contrast(1.5) grayscale(30%)",
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.h1 
        className="text-4xl md:text-5xl font-extrabold mb-8 tracking-widest text-center font-['Belleza']"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Choose Your Destination
      </motion.h1>

      <div className="flex gap-8 md:gap-16">
        <motion.a 
          href="https://Zoharie.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-blue-600 p-6 rounded-full shadow-2xl text-5xl md:text-7xl text-white"
          whileTap={{ scale: 0.9 }}
        >
          <div className="flex items-center justify-center h-12 w-12"> {/* आइकन के आकार का div */}
            <FaShoppingBag />
          </div>
        </motion.a>

        <motion.a 
          href="https://wa.me/8808751016" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-500 p-6 rounded-full shadow-2xl text-5xl md:text-7xl text-white"
          whileTap={{ scale: 0.9 }}
        >
          <FaWhatsapp />
        </motion.a>
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
        <motion.a
          href="https://facebook.com/zoharieofficial"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-800 p-3 rounded-full text-2xl text-white"
          whileTap={{ scale: 0.9 }}
        >
          <FaFacebook />
        </motion.a>

        <motion.a
          href="https://x.com/zoharieofficial"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black p-3 rounded-full text-2xl text-white"
          whileTap={{ scale: 0.9 }}
        >
          <FaSquareXTwitter />
        </motion.a>

        <motion.a
          href="https://instagram.com/zoharieofficial"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-500 p-3 rounded-full text-2xl text-white"
          whileTap={{ scale: 0.9 }}
        >
          <FaInstagram />
        </motion.a>
      </div>
      <div className="absolute top-16 left-16 w-24 h-24 bg-pink-500 rounded-full blur-[100px] opacity-50"></div>
      <div className="absolute bottom-24 right-24 w-36 h-36 bg-blue-400 rounded-full blur-[100px] opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-green-400 rounded-full blur-[100px] opacity-50 transform -translate-x-1/2 -translate-y-1/2"></div>
    
    </div>
  );
}
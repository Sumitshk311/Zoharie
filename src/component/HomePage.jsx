import React from 'react';
import { motion } from 'framer-motion';
import { FaShoppingBag, FaWhatsapp } from 'react-icons/fa';

export default function Homepage() {
  const snowflakes = Array.from({ length: 50 }, (_, i) => i);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-br from-gray-900 to-gray-700 text-white overflow-hidden">
      <motion.h1 
        className="text-3xl md:text-5xl font-extrabold mb-8 tracking-widest text-center"
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
          className="bg-blue-600 p-6 rounded-full shadow-2xl text-5xl md:text-7xl text-white hover:bg-blue-700"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaShoppingBag />
        </motion.a>

        <motion.a 
          href="https://wa.me/7522074547" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-500 p-6 rounded-full shadow-2xl text-5xl md:text-7xl text-white hover:bg-green-600"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaWhatsapp />
        </motion.a>
      </div>

      {snowflakes.map((_, index) => (
        <motion.div
          key={index}
          className="absolute bg-white w-2 h-2 rounded-full opacity-80"
          initial={{ y: window.innerHeight, x: Math.random() * window.innerWidth }}
          animate={{ y: -10, x: Math.random() * window.innerWidth }}
          transition={{ duration: 20 + Math.random() * 10, repeat: Infinity }}
        />
      ))}

      <motion.div 
        className="absolute inset-0 -z-10"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        <div className="absolute top-16 left-16 w-24 h-24 bg-pink-500 rounded-full blur-[100px] opacity-50"></div>
        <div className="absolute bottom-24 right-24 w-36 h-36 bg-blue-400 rounded-full blur-[100px] opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-green-400 rounded-full blur-[100px] opacity-50 transform -translate-x-1/2 -translate-y-1/2"></div>
      </motion.div>
    </div>
  );
}

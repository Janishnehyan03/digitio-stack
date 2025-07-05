// app/components/HeroSection.tsx

import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden" id='home'>
      {/* Background Blobs - Changed */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-teal-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-emerald-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-sky-600 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-500"> {/* Changed */}
            Building Digital Masterpieces
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          From sleek landing pages to complex web applications, Digitio Stack transforms your vision into a high-performance reality that engages users and drives growth.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            href="#projects"
            className="group flex items-center justify-center bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105" // Changed
          >
            Explore My Work
            <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="#services"
            className="group flex items-center justify-center bg-transparent border-2 border-gray-400 hover:border-white text-gray-300 hover:text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            See Services
          </Link>
        </div>
      </div>
    </div>
  );
};
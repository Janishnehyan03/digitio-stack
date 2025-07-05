// app/components/Footer.tsx

import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <Link href="/" className="text-xl font-bold text-white tracking-wider">
            Digitio<span className="text-teal-400">Stack</span>
          </Link>
          <p className="text-gray-400 mt-4 md:mt-0">
            © {new Date().getFullYear()} Digitio Stack. All rights reserved.
          </p>
          <div className="flex mt-4 md:mt-0 space-x-6">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
              <Twitter />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
              <Github />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
              <Linkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
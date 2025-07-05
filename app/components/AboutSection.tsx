// app/components/AboutSection.tsx

import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="developer-info" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="flex justify-center">
            <div className="relative w-80 h-80">
              <Image
                src="/images/profile.jpg" // Place your photo in /public folder
                alt="Digitio Stack Developer"
                layout="fill"
                objectFit="cover"
                className="rounded-full border-4 border-gray-800 shadow-teal-glow"
              />
            </div>
          </div>

          {/* Text Column */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">
              The Developer Behind the <span className="text-teal-400">Stack</span>
            </h2>
            <p className="text-gray-300 mb-6 text-lg">
              Hi, I'm the creator of Digitio Stack. With a passion for clean code and beautiful design, I specialize in building high-performance websites and applications that not only look great but also provide meaningful value to users.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-teal-400 mr-3 flex-shrink-0" />
                <span>Expert in React, Next.js, and the JavaScript ecosystem.</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-teal-400 mr-3 flex-shrink-0" />
                <span>Skilled in creating responsive, mobile-first designs with Tailwind CSS.</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-teal-400 mr-3 flex-shrink-0" />
                <span>Passionate about web performance, accessibility, and user experience.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
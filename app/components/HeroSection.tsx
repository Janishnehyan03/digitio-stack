// app/components/HeroSection.tsx

"use client";

import { easeInOut, easeOut, motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export const HeroSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: easeOut
      }
    }
  };

  const titleVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: easeInOut
      }
    }
  };

  const blobVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.5, 0.3],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: easeInOut
      }
    }
  };

  const buttonVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easeOut
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 20px 40px rgba(20, 184, 166, 0.4)",
      transition: {
        duration: 0.2
      }
    },
    tap: { scale: 0.98 }
  };

  const secondaryButtonVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: easeOut
      }
    },
    hover: {
      scale: 1.05,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      borderColor: "#ffffff",
      color: "#ffffff",
      transition: {
        duration: 0.2
      }
    },
    tap: { scale: 0.98 }
  };



  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden" id='home'>
      {/* Enhanced Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full mix-blend-screen filter blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(20, 184, 166, 0.4) 0%, rgba(20, 184, 166, 0.1) 70%)"
          }}
          variants={blobVariants}
          animate="animate"
          initial={{ scale: 0.8, opacity: 0 }}
        />

        <motion.div
          className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full mix-blend-screen filter blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, rgba(16, 185, 129, 0.1) 70%)"
          }}
          variants={blobVariants}
          animate="animate"
          initial={{ scale: 0.8, opacity: 0 }}
          transition={{ delay: 2 }}
        />

        <motion.div
          className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full mix-blend-screen filter blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(14, 165, 233, 0.4) 0%, rgba(14, 165, 233, 0.1) 70%)"
          }}
          variants={blobVariants}
          animate="animate"
          initial={{ scale: 0.8, opacity: 0 }}
          transition={{ delay: 4 }}
        />

        {/* Additional floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-teal-400 rounded-full opacity-40"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center px-4 py-2 mb-8 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 border border-teal-500/30 rounded-full text-teal-300 text-sm font-medium backdrop-blur-sm"
        >
          <motion.span
            className="w-2 h-2 bg-teal-400 rounded-full mr-2"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          Welcome to DigitioStack
        </motion.div>

        {/* Main Title */}
        <motion.h1
          variants={titleVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight mb-6"
        >
          <motion.span
            className="block bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-sky-400"
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundSize: "200% auto",
            }}
          >
            Building Digital
          </motion.span>
          <motion.span
            className="block bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-teal-400 to-emerald-400"
            animate={{
              backgroundPosition: ["100%", "0%", "100%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundSize: "200% auto",
            }}
          >
            Masterpieces
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          From sleek landing pages to complex web applications,
          <motion.span
            className="text-teal-400 font-semibold"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            {" "}Digitio Stack{" "}
          </motion.span>
          transforms your vision into a high-performance reality that engages users and drives growth.
        </motion.p>

        {/* Call-to-Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-6"
          variants={itemVariants}
        >
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Link
              href="#projects"
              className="group relative flex items-center justify-center bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white font-bold py-4 px-10 rounded-full shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <motion.span className="relative z-10 flex items-center">
                Explore My Work
                <motion.div
                  className="ml-3"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FiArrowRight />
                </motion.div>
              </motion.span>

              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              />
            </Link>
          </motion.div>

          <motion.div
            variants={secondaryButtonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Link
              href="#services"
              className="group relative flex items-center justify-center bg-transparent border-2 border-gray-500 text-gray-300 font-semibold py-4 px-10 rounded-full shadow-lg transition-all duration-300 backdrop-blur-sm overflow-hidden"
            >
              <span className="relative z-10">See Services</span>

              {/* Hover background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-emerald-500/10"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-teal-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

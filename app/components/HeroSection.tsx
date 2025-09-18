"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react"; // Play icon removed as not used in new design
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  const prefersReducedMotion = useReducedMotion();

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const item: Variants = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const floatY: Variants = {
    animate: prefersReducedMotion
      ? {}
      : {
          y: [0, -8, 0],
          transition: {
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          },
        },
  };

  

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-gray-50 pt-24 pb-16 md:pt-32 md:pb-20 lg:pt-40 lg:pb-24" // Adjusted padding for Finpay look
      aria-label="Hero"
    >
      {/* Background: subtle radial + grid (retained from your code, adjusted for light theme) */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(1200px 600px at 10% -10%, rgba(6,182,212,0.15) 0%, rgba(6,182,212,0) 60%), radial-gradient(900px 500px at 90% 10%, rgba(13,148,136,0.1) 0%, rgba(13,148,136,0) 60%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, #e0e0e0 0px, #e0e0e0 1px), linear-gradient(to bottom, #e0e0e0 0px, #e0e0e0 1px)",
            backgroundSize: "40px 40px",
            maskImage:
              "radial-gradient(1000px 600px at 50% 0%, rgba(0,0,0,0.2), rgba(0,0,0,0))",
            WebkitMaskImage:
              "radial-gradient(1000px 600px at 50% 0%, rgba(0,0,0,0.2), rgba(0,0,0,0))",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial="hidden"
          animate="show"
          variants={container}
          className="grid items-center gap-10 md:gap-12 lg:grid-cols-2 lg:gap-16"
        >
          {/* Left: Content Area (Main Heading, Paragraph, CTAs, and Company Logos) */}
          <div className="flex flex-col">
            <motion.div variants={item} className="mb-4">
              {/* Custom badge markup - Retained from your code */}
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 text-emerald-700 text-sm font-medium px-3 py-1">
                <Sparkles className="h-4 w-4 text-emerald-500" />
                <span className="tracking-tight">Welcome to Digitio Stack</span>
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-balance font-extrabold tracking-tight text-4xl leading-tight sm:text-5xl md:text-6xl md:leading-[1.1] lg:text-7xl text-gray-900 mt-4" // Increased top margin
            >
              {/* Main Heading - Retained from your code */}
              <span className="block bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600 bg-clip-text text-transparent">
                Building Digital
              </span>
              <span className="block">Masterpieces</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-5 max-w-2xl text-pretty text-base text-gray-600 sm:text-lg md:text-xl"
            >
              {/* Paragraph - Retained from your code */}
              From sleek landing pages to complex web applications,{" "}
              <span className="font-semibold text-teal-600">
                Digitio Stack
              </span>{" "}
              turns your vision into fast, engaging experiences that drive
              growth.
            </motion.p>

            {/* CTAs - Retained from your code */}
            <motion.div
              variants={item}
              className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:items-stretch"
            >
              <Link
                href="#projects"
                aria-label="Explore my work"
                className="group w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex items-center justify-center transform hover:scale-[1.02]"
              >
                <span className="flex items-center">
                  Explore my work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
              <Link
                href="#services"
                aria-label="See services"
                className="w-full sm:w-auto border-2 border-gray-200 bg-white text-gray-700 font-semibold py-4 px-10 rounded-full shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center hover:border-teal-400"
              >
                See services
              </Link>
            </motion.div>

           
          </div>

          {/* Right: Visual (Hero Card / Image Display) */}
          <motion.div
            variants={item}
            className="relative mx-auto w-full max-w-xl lg:max-w-none lg:justify-self-end mt-12 lg:mt-0" // Adjusted margin and positioning for Finpay look
          >
            {/* Main Content Card (Similar to Finpay's card) */}
            <motion.div
              variants={floatY}
              animate="animate"
              className="relative rounded-3xl bg-white p-6 shadow-xl ring-1 ring-gray-100 transform scale-95" // Added rotation and scale for a dynamic Finpay feel
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #f9fbfd 100%)", // Subtle gradient for the card background
              }}
            >
              <div className="relative aspect-[10/7] w-full overflow-hidden rounded-2xl border border-gray-200 shadow-inner">
                {/* Your Project Preview Image */}
                <Image
                  src="/images/clean-dashboard-ui-preview.png" // Your existing image
                  alt="Project preview"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

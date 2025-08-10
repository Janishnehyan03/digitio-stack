"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play, Sparkles } from "lucide-react";
// Remove usage of Button/Badge from other UI libraries and use your own markup/classes.

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

  const pulse: Variants = {
    animate: prefersReducedMotion
      ? {}
      : {
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.06, 1],
          transition: {
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          },
        },
  };

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-background"
      aria-label="Hero"
    >
      {/* Background: subtle radial + grid */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(1200px 600px at 10% -10%, rgba(16,185,129,0.35) 0%, rgba(16,185,129,0) 60%), radial-gradient(900px 500px at 90% 10%, rgba(45,212,191,0.25) 0%, rgba(45,212,191,0) 60%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 1px), linear-gradient(to bottom, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 1px)",
            backgroundSize: "40px 40px",
            maskImage:
              "radial-gradient(1000px 600px at 50% 0%, rgba(0,0,0,1), rgba(0,0,0,0.05))",
            WebkitMaskImage:
              "radial-gradient(1000px 600px at 50% 0%, rgba(0,0,0,1), rgba(0,0,0,0.05))",
          }}
        />
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-6 py-24 md:py-28 lg:py-32">
          <motion.div
            initial="hidden"
            animate="show"
            variants={container}
            className="grid items-center gap-10 md:gap-12 lg:grid-cols-2"
          >
            {/* Left: Content */}
            <div className="flex flex-col">
              <motion.div variants={item} className="mb-4">
                {/* Custom badge markup */}
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-700/30 bg-emerald-700/10 px-3 py-1 text-emerald-300 text-sm font-medium">
                  <Sparkles className="h-4 w-4 text-emerald-300" />
                  <span className="tracking-tight">
                    Welcome to Digitio Stack
                  </span>
                </span>
              </motion.div>

              <motion.h1
                variants={item}
                className={
                  "text-balance font-extrabold tracking-tight text-4xl leading-tight sm:text-5xl md:text-6xl md:leading-[1.1] lg:text-7xl"
                }
              >
                <span className="block bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 bg-clip-text text-transparent">
                  Building Digital
                </span>
                <span className="block">Masterpieces</span>
              </motion.h1>

              <motion.p
                variants={item}
                className="mt-5 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg md:text-xl"
              >
                From sleek landing pages to complex web applications,{" "}
                <span className="font-semibold text-emerald-400">
                  Digitio Stack
                </span>{" "}
                turns your vision into fast, engaging experiences that drive
                growth.
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={item}
                className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:items-stretch"
              >
                <Link
                  href="#projects"
                  aria-label="Explore my work"
                  className="group w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-500/90 hover:to-teal-500/90 text-white font-bold py-4 px-10 rounded-full shadow-2xl transition-all duration-300 overflow-hidden flex items-center justify-center"
                >
                  <span className="flex items-center">
                    Explore my work
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
                <Link
                  href="#services"
                  aria-label="See services"
                  className="w-full sm:w-auto border-2 border-emerald-700/30 bg-background/40 text-emerald-300 font-semibold py-4 px-10 rounded-full shadow-lg transition-all duration-300 backdrop-blur-sm flex items-center justify-center"
                >
                  See services
                </Link>
               
              </motion.div>
            </div>

            {/* Right: Visual */}
            <motion.div
              variants={item}
              className="relative mx-auto w-full max-w-xl"
            >
              {/* Glow */}
              <motion.div
                variants={pulse}
                animate="animate"
                className="absolute -inset-10 rounded-[28px] bg-gradient-to-tr from-emerald-500/20 via-teal-400/10 to-emerald-500/20 blur-3xl"
              />
              {/* Card */}
              <motion.div
                variants={floatY}
                animate="animate"
                className={
                  "relative rounded-2xl border bg-card/60 p-4 shadow-2xl backdrop-blur border-emerald-900/20"
                }
              >
                {/* Header bar */}
                <div className="flex items-center gap-2 border-b border-border/60 px-3 py-3">
                  <span className="h-3 w-3 rounded-full bg-red-400/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                  <div className="ml-auto text-xs text-muted-foreground">
                    Preview
                  </div>
                </div>

                {/* Preview image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
                  <Image
                    src="/images/clean-dashboard-ui-preview.png"
                    alt="Project preview"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Bottom meta */}
                <div className="flex items-center justify-between p-3">
                  <div className="text-sm text-muted-foreground">
                    High‑performance • Accessible • Scalable
                  </div>
                  <Link
                    href="#projects"
                    className="group inline-flex items-center text-sm text-emerald-400 hover:text-emerald-300"
                  >
                    See projects
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          aria-hidden="true"
          className="flex items-center gap-2 text-xs text-muted-foreground"
        >
          <div className="h-6 w-3 rounded-full border border-muted-foreground/40 p-0.5">
            <motion.div
              animate={prefersReducedMotion ? {} : { y: [0, 12, 0] }}
              transition={{
                duration: 1.8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="h-2 w-1 rounded-full bg-emerald-400"
            />
          </div>
          <span>Scroll</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

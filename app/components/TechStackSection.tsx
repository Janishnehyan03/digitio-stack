// app/components/TechStackSection.tsx
// Enhanced MERN + Next.js technology section with Framer Motion animations.
// Features teal color scheme and modern glassmorphism design.
// Tailwind CSS utility classes used for styling.
// -------------------------------------------------------------
// Usage:
// <TechStackSection heading="My Core Stack" />
// -------------------------------------------------------------

"use client";

import { easeOut, motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

// ------------------------------------------------------------------
// DATA — Enhanced with more modern stack options
// ------------------------------------------------------------------
const techStack = [
  {
    name: "Next.js",
    icon: SiNextdotjs,
    blurb: "React framework for full‑stack apps & SSR/SSG.",
    color: "from-white to-gray-300",
    hoverColor: "group-hover:from-teal-400 group-hover:to-teal-300",
  },
  {
    name: "React",
    icon: SiReact,
    blurb: "Component UI library powering interactive frontends.",
    color: "from-blue-400 to-cyan-400",
    hoverColor: "group-hover:from-teal-400 group-hover:to-teal-500",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    blurb: "Typed JavaScript for scalable applications.",
    color: "from-blue-500 to-blue-400",
    hoverColor: "group-hover:from-teal-400 group-hover:to-teal-500",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    blurb: "JavaScript runtime for scalable backend services.",
    color: "from-green-500 to-green-400",
    hoverColor: "group-hover:from-teal-500 group-hover:to-emerald-500",
  },
  {
    name: "Express",
    icon: SiExpress,
    blurb: "Minimal Node.js framework for APIs & middleware.",
    color: "from-gray-600 to-gray-400",
    hoverColor: "group-hover:from-teal-500 group-hover:to-teal-400",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    blurb: "Document database used across your MERN projects.",
    color: "from-green-600 to-green-500",
    hoverColor: "group-hover:from-teal-500 group-hover:to-emerald-500",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    blurb: "Utility‑first styling for rapid, consistent UI.",
    color: "from-cyan-500 to-blue-500",
    hoverColor: "group-hover:from-teal-400 group-hover:to-cyan-400",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    blurb: "The language powering modern web development.",
    color: "from-yellow-500 to-yellow-400",
    hoverColor: "group-hover:from-teal-400 group-hover:to-yellow-400",
  },
];

// ------------------------------------------------------------------
// FRAMER MOTION VARIANTS
// ------------------------------------------------------------------
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: easeOut,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeOut
    }
  }
};

// ------------------------------------------------------------------
// CARD COMPONENT
// ------------------------------------------------------------------
interface TechCardProps {
  name: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement> & { className?: string }>;
  blurb?: string;
  color: string;
  hoverColor: string;
}

const TechCard = ({ name, Icon, blurb, color, hoverColor }: TechCardProps) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{
        y: -8,
        scale: 1.05,
        rotateY: 5,
        boxShadow: "0 25px 50px -12px rgba(20, 184, 166, 0.25)"
      }}
      whileTap={{ scale: 0.98 }}
      className="group relative cursor-pointer"
    >
      <div className="relative flex flex-col items-center justify-center rounded-2xl border border-gray-700/50 bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-8 text-center backdrop-blur-xl transition-all duration-500 hover:border-teal-500/60 hover:bg-gradient-to-br hover:from-gray-800/90 hover:to-gray-700/90">

        {/* Background Glow Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/10 to-emerald-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Animated Border */}
        <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-500 opacity-20 blur-sm" />
        </div>

        {/* Icon Container */}
        <motion.div
          className="relative mb-6 flex items-center justify-center"
          whileHover={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.5 }}
        >
          <div className={`rounded-full bg-gradient-to-r ${color} ${hoverColor} p-4 transition-all duration-500`}>
            <Icon className="h-8 w-8 text-white drop-shadow-lg" />
          </div>

          {/* Icon Glow */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400/30 to-emerald-400/30 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Content */}
        <div className="relative z-10">
          <motion.h3
            className="mb-3 text-xl font-bold text-white transition-colors duration-300 group-hover:text-teal-300"
            whileHover={{ scale: 1.05 }}
          >
            {name}
          </motion.h3>

          {blurb && (
            <motion.p
              className="text-sm leading-relaxed text-gray-400 transition-colors duration-300 group-hover:text-gray-300"
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1 }}
            >
              {blurb}
            </motion.p>
          )}
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-1 w-1 rounded-full bg-teal-400 opacity-0 group-hover:opacity-60"
              style={{
                top: `${20 + i * 20}%`,
                left: `${10 + i * 30}%`,
              }}
              animate={{
                y: [-10, 10, -10],
                x: [-5, 5, -5],
              }}
              transition={{
                duration: 2 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// ------------------------------------------------------------------
// SECTION COMPONENT
// ------------------------------------------------------------------
interface TechStackSectionProps {
  heading?: string;
  className?: string;
  showBlurbs?: boolean;
}

export const TechStackSection = ({
  heading = "My Technology Stack",
  className = "",
  showBlurbs = true,
}: TechStackSectionProps) => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const isTitleInView = useInView(titleRef, { once: true });

  return (
    <section
      id="technologies"
      className={`relative min-h-screen py-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden ${className}`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-teal-500/10 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={titleRef}
          variants={headerVariants}
          initial="hidden"
          animate={isTitleInView ? "visible" : "hidden"}
          className="mb-16 text-center"
        >
          <motion.h2
            className="mb-4 text-5xl font-bold md:text-6xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              {heading}
            </span>
          </motion.h2>

          <motion.p
            className="mx-auto max-w-2xl text-lg text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            The powerful technologies I use to bring your ideas to life
          </motion.p>
        </motion.div>

        {/* Tech Grid */}
        <motion.div
          ref={sectionRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {techStack.map((tech) => (
            <TechCard
              key={tech.name}
              name={tech.name}
              Icon={tech.icon}
              blurb={showBlurbs ? tech.blurb : undefined}
              color={tech.color}
              hoverColor={tech.hoverColor}
            />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(20, 184, 166, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 px-8 py-3 font-semibold text-white transition-all duration-300 hover:from-teal-600 hover:to-emerald-600"
          >
            Let us Build Something Amazing
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

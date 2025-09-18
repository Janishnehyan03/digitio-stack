"use client";
import { easeOut, motion, useReducedMotion } from "framer-motion";
import type React from "react";
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
// DATA
// ------------------------------------------------------------------
const techStack = [
  {
    name: "Next.js",
    icon: SiNextdotjs,
    blurb: "React framework for full-stack apps & SSR/SSG.",
  },
  {
    name: "React",
    icon: SiReact,
    blurb: "Component UI library powering interactive frontends.",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    blurb: "Typed JavaScript for scalable applications.",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    blurb: "JavaScript runtime for scalable backend services.",
  },
  {
    name: "Express",
    icon: SiExpress,
    blurb: "Minimal Node.js framework for APIs & middleware.",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    blurb: "Document database used across your MERN projects.",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    blurb: "Utility-first styling for rapid, consistent UI.",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    blurb: "The language powering modern web development.",
  },
];

// ------------------------------------------------------------------
// FRAMER MOTION VARIANTS
// ------------------------------------------------------------------
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};
const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

// ------------------------------------------------------------------
// CARD COMPONENT
// ------------------------------------------------------------------
interface TechCardProps {
  name: string;
  Icon: React.ComponentType<
    React.SVGProps<SVGSVGElement> & { className?: string }
  >;
  blurb?: string;
}

const TechCard = ({ name, Icon, blurb }: TechCardProps) => {
  return (
    <motion.div
      role="listitem"
      variants={itemVariants}
      whileHover={{ y: -6, scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="group relative cursor-pointer"
    >
      <div className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-white p-8 text-center shadow-sm transition-all duration-300 group-hover:border-emerald-400/60 group-hover:shadow-lg group-hover:shadow-emerald-100">
        {/* Icon */}
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 group-hover:bg-emerald-50 transition-colors">
          <Icon className="h-8 w-8 text-emerald-500 group-hover:text-emerald-600 group-hover:drop-shadow-md transition-all" />
        </div>

        {/* Text */}
        <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
          {name}
        </h3>
        {blurb && (
          <p className="text-sm text-gray-600 group-hover:text-gray-800">
            {blurb}
          </p>
        )}
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
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="technologies"
      className={`relative py-20 md:py-24 overflow-hidden ${className}`}
    >
      {/* Background accent */}
      <div className="absolute inset-0" />

      <div className="container relative z-10 mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-14 text-center md:mb-16"
        >
          <motion.h2
            className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl"
            whileHover={prefersReducedMotion ? {} : { scale: 1.03 }}
            transition={{ duration: 0.25 }}
          >
            {heading}
          </motion.h2>
          <motion.p
            className="mx-auto max-w-2xl text-lg text-gray-600"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The powerful technologies I use to bring your ideas to life.
          </motion.p>
        </motion.div>

        {/* Tech Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          role="list"
        >
          {techStack.map((tech) => (
            <TechCard
              key={tech.name}
              name={tech.name}
              Icon={tech.icon}
              blurb={showBlurbs ? tech.blurb : undefined}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

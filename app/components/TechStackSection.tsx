// Enhanced MERN + Next.js technology section with refined dark theme and creative glassmorphism.
// Keeps the original API and data structure intact.

"use client"
import { easeOut, motion, useInView, useReducedMotion } from "framer-motion"
import type React from "react"

import { useRef } from "react"
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si"

// ------------------------------------------------------------------
// DATA — Enhanced with more modern stack options (unchanged structure)
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
]

// ------------------------------------------------------------------
// FRAMER MOTION VARIANTS
// ------------------------------------------------------------------
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: easeOut },
  },
}

const headerVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
}

// ------------------------------------------------------------------
// CARD COMPONENT
// ------------------------------------------------------------------
interface TechCardProps {
  name: string
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement> & { className?: string }>
  blurb?: string
  color: string
  hoverColor: string
}

const TechCard = ({ name, Icon, blurb, color, hoverColor }: TechCardProps) => {
  return (
    <motion.div
      role="listitem"
      variants={itemVariants}
      whileHover={{
        y: -6,
        scale: 1.03,
        rotateY: 4,
        boxShadow: "0 25px 50px -12px rgba(16, 185, 129, 0.25)",
      }}
      whileTap={{ scale: 0.98 }}
      className="group relative cursor-pointer"
    >
      <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/60 p-8 text-center shadow-xl ring-1 ring-emerald-500/10 backdrop-blur transition-all duration-500 hover:border-emerald-500/40 hover:shadow-emerald-500/10">
        {/* Conic gradient accent on hover */}
        <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="h-full w-full rounded-2xl bg-[conic-gradient(from_180deg_at_50%_50%,rgba(16,185,129,0.18),rgba(0,0,0,0)_30%,rgba(45,212,191,0.18),rgba(0,0,0,0)_70%,rgba(16,185,129,0.18))]" />
        </div>

        {/* Icon Container */}
        <motion.div
          className="relative mb-6 flex items-center justify-center"
          whileHover={{ rotate: [0, -8, 8, 0] }}
          transition={{ duration: 0.5 }}
        >
          <div
            className={`rounded-full bg-gradient-to-r ${color} ${hoverColor} p-4 shadow-inner transition-all duration-500`}
          >
            <Icon className="h-8 w-8 text-black/80 drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]" />
          </div>

          {/* Icon Glow */}
          <motion.div
            className="absolute inset-0 rounded-full bg-[radial-gradient(closest-side,rgba(16,185,129,0.28),transparent)] opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Content */}
        <div className="relative z-10">
          <motion.h3
            className="mb-2 text-xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-emerald-400"
            whileHover={{ scale: 1.02 }}
          >
            {name}
          </motion.h3>
          {blurb && (
            <motion.p
              className="text-sm leading-relaxed text-neutral-400 transition-colors duration-300 group-hover:text-neutral-300"
              initial={{ opacity: 0.85 }}
              whileHover={{ opacity: 1 }}
            >
              {blurb}
            </motion.p>
          )}
        </div>

        {/* Floating particles */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-1 w-1 rounded-full bg-emerald-400/80 opacity-0 group-hover:opacity-60"
              style={{ top: `${18 + i * 22}%`, left: `${10 + i * 30}%` }}
              animate={{ y: [-8, 8, -8], x: [-4, 4, -4] }}
              transition={{
                duration: 2 + i * 0.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: i * 0.15,
              }}
            />
          ))}
        </div>

        {/* Bottom divider */}
        <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
        <div className="mt-3 text-xs text-neutral-500">Reliable • Performant • Scalable</div>
      </div>
    </motion.div>
  )
}

// ------------------------------------------------------------------
// SECTION COMPONENT
// ------------------------------------------------------------------
interface TechStackSectionProps {
  heading?: string
  className?: string
  showBlurbs?: boolean
}

export const TechStackSection = ({
  heading = "My Technology Stack",
  className = "",
  showBlurbs = true,
}: TechStackSectionProps) => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const isTitleInView = useInView(titleRef, { once: true })
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      id="technologies"
      className={`relative overflow-hidden bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(16,185,129,0.12),rgba(0,0,0,0)),radial-gradient(900px_500px_at_90%_10%,rgba(20,184,166,0.08),rgba(0,0,0,0))] py-20 md:py-24 ${className}`}
      aria-label="Technology stack"
    >
      {/* Subtle masked grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          maskImage: "radial-gradient(800px 400px at 50% 0%, black, transparent)",
          WebkitMaskImage: "radial-gradient(800px 400px at 50% 0%, black, transparent)",
        }}
      />

      {/* Background glow orbs (toned down) */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={prefersReducedMotion ? {} : { scale: [1, 1.12, 1], rotate: [0, 120, 240] }}
          transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl"
        />
        <motion.div
          animate={prefersReducedMotion ? {} : { scale: [1.08, 1, 1.08], rotate: [240, 120, 0] }}
          transition={{ duration: 34, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute -bottom-44 -left-44 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl"
        />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={titleRef}
          variants={headerVariants}
          initial="hidden"
          animate={isTitleInView ? "visible" : "hidden"}
          className="mb-14 text-center md:mb-16"
        >
          <motion.h2
            className="mb-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl"
            whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 bg-clip-text text-transparent">
              {heading}
            </span>
          </motion.h2>
          <motion.p
            className="mx-auto max-w-2xl text-lg text-neutral-400"
            initial={{ opacity: 0, y: 14 }}
            animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The powerful technologies I use to bring your ideas to life.
          </motion.p>
        </motion.div>

        {/* Tech Grid */}
        <motion.div
          ref={sectionRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mx-auto grid max-w-7xl grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
          role="list"
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
          className="mt-14 text-center md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.button
            whileHover={prefersReducedMotion ? {} : { scale: 1.04, boxShadow: "0 16px 40px rgba(16, 185, 129, 0.20)" }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-3 font-semibold text-white shadow-lg shadow-emerald-500/10 ring-1 ring-emerald-500/30 transition-colors hover:from-emerald-500/90 hover:to-teal-500/90"
          >
            Let us Build Something Amazing
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

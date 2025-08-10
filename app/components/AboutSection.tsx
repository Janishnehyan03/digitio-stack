"use client"
import { easeOut, motion, useInView, useReducedMotion } from "framer-motion"
import { Award, CheckCircle, Code2, Coffee, Mail, MapPin, Users } from "lucide-react"
import Image from "next/image"
import { useRef } from "react"
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi"

export const AboutSection = () => {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const textRef = useRef(null)
  const prefersReducedMotion = useReducedMotion()

  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const isImageInView = useInView(imageRef, { once: true })
  const isTextInView = useInView(textRef, { once: true })

  // Animation variants (subtle, professional)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, staggerChildren: 0.16 },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.94, rotateY: 8 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { duration: 0.8, ease: easeOut },
    },
  }

  const textVariants = {
    hidden: { opacity: 0, x: 24 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: 16 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.45, ease: easeOut },
    }),
  }

  const skills = [
    { icon: Code2, text: "Expert in React, Next.js, and the JavaScript ecosystem", category: "Frontend" },
    {
      icon: CheckCircle,
      text: "Skilled in creating responsive, mobile-first designs with Tailwind CSS",
      category: "Design",
    },
    { icon: Award, text: "Passionate about web performance, accessibility, and user experience", category: "Quality" },
    { icon: Users, text: "Experienced in collaborative development and client communication", category: "Teamwork" },
  ]

  const stats = [
    { label: "Projects Completed", value: "50+", icon: Award },
    { label: "Happy Clients", value: "30+", icon: Users },
    { label: "Years Experience", value: "5+", icon: Coffee },
    { label: "Technologies", value: "15+", icon: Code2 },
  ]

  return (
    <section
      id="developer-info"
      className="relative overflow-hidden bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(16,185,129,0.12),rgba(0,0,0,0)),radial-gradient(900px_500px_at_90%_10%,rgba(20,184,166,0.08),rgba(0,0,0,0))] py-20 md:py-24"
    >
      {/* Subtle grid overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          maskImage: "radial-gradient(700px 350px at 50% 0%, black, transparent)",
          WebkitMaskImage: "radial-gradient(700px 350px at 50% 0%, black, transparent)",
        }}
      />

      {/* Background glow orbs (toned down) */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={prefersReducedMotion ? {} : { scale: [1, 1.08, 1], rotate: [0, 120, 240] }}
          transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute top-16 right-16 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl"
        />
        <motion.div
          animate={prefersReducedMotion ? {} : { scale: [1.08, 1, 1.08], rotate: [240, 120, 0] }}
          transition={{ duration: 34, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute bottom-16 left-16 h-80 w-80 rounded-full bg-teal-500/10 blur-3xl"
        />
      </div>

      <motion.div
        ref={sectionRef}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container relative z-10 mx-auto px-6"
      >
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Image Column */}
          <motion.div
            ref={imageRef}
            variants={imageVariants}
            initial="hidden"
            animate={isImageInView ? "visible" : "hidden"}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Card frame with glow */}
              <motion.div
                className="relative h-80 w-80 transform-gpu rounded-[28px] border border-neutral-800 bg-neutral-900/60 p-2 shadow-2xl ring-1 ring-emerald-500/10 backdrop-blur md:h-96 md:w-96"
                whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Gradient outline accent */}
                <div className="pointer-events-none absolute -inset-px rounded-[28px] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(16,185,129,0.18),rgba(0,0,0,0)_30%,rgba(45,212,191,0.18),rgba(0,0,0,0)_70%,rgba(16,185,129,0.18))]" />

                {/* Avatar circle with subtle ring */}
                <div className="relative grid h-full w-full place-items-center rounded-[22px] bg-neutral-950 ring-1 ring-inset ring-emerald-500/20">
                  <div className="relative h-64 w-64 overflow-hidden rounded-full shadow-2xl ring-1 ring-emerald-500/20 md:h-80 md:w-80">
                    <Image
                      src="/images/profile.jpg"
                      alt="Janish Nehyan - Full Stack Developer"
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 420px, 320px"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    />
                  </div>

                  {/* inner soft glow */}
                  <div className="pointer-events-none absolute inset-10 -z-10 rounded-full bg-[radial-gradient(closest-side,rgba(16,185,129,0.18),transparent)] blur-xl" />
                </div>

                {/* Floating badges */}
                <motion.div
                  className="absolute -top-4 -right-4 rounded-xl bg-emerald-500 p-3 text-white shadow-lg"
                  animate={prefersReducedMotion ? {} : { y: [-4, 4, -4], rotate: [0, 8, -8, 0] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <Code2 size={22} />
                </motion.div>
                <motion.div
                  className="absolute -bottom-4 -left-4 rounded-xl bg-teal-500 p-3 text-white shadow-lg"
                  animate={prefersReducedMotion ? {} : { y: [4, -4, 4], rotate: [0, -8, 8, 0] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1.5 }}
                >
                  <Award size={22} />
                </motion.div>
              </motion.div>

              {/* Contact Info Card */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={isImageInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-8 left-1/2 w-max -translate-x-1/2 rounded-2xl border border-emerald-500/25 bg-neutral-900/80 px-4 py-3 text-white shadow-xl ring-1 ring-emerald-500/10 backdrop-blur"
              >
                <div className="flex items-center space-x-3">
                  <Mail className="text-emerald-400" size={16} />
                  <span className="text-sm font-medium">janishnehyan03@gmail.com</span>
                </div>
                <div className="mt-1.5 flex items-center space-x-3">
                  <MapPin className="text-emerald-400" size={16} />
                  <span className="text-sm font-medium">Kondotty</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            ref={textRef}
            variants={textVariants}
            initial="hidden"
            animate={isTextInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Header */}
            <div>
              <motion.h2
                className="mb-4 text-4xl font-extrabold tracking-tight text-white lg:text-5xl"
                whileHover={prefersReducedMotion ? {} : { scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                Meet{" "}
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 bg-clip-text text-transparent">
                  Janish Nehyan
                </span>
              </motion.h2>

              <motion.div
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-700/30 bg-emerald-700/10 px-4 py-2"
                whileHover={prefersReducedMotion ? {} : { scale: 1.03 }}
              >
                <span className="text-sm font-semibold text-emerald-300">Full Stack Developer</span>
              </motion.div>

              <motion.p
                className="text-lg leading-relaxed text-neutral-300"
                initial={{ opacity: 0, y: 14 }}
                animate={isTextInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Passionate about creating exceptional digital experiences that bridge the gap between innovative design
                and robust functionality. I build scalable web applications that look stunning and deliver outstanding
                performance and usability.
              </motion.p>
            </div>

            {/* Skills List */}
            <motion.div className="space-y-4">
              {skills.map((skill, index) => {
                const Icon = skill.icon
                return (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={itemVariants}
                    initial="hidden"
                    animate={isTextInView ? "visible" : "hidden"}
                    whileHover={prefersReducedMotion ? {} : { x: 6, scale: 1.01 }}
                    className="group relative flex items-start gap-4 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/60 p-4 ring-1 ring-emerald-500/10 backdrop-blur transition-colors hover:border-emerald-500/40"
                  >
                    <div className="relative grid h-10 w-10 place-items-center rounded-lg bg-neutral-950 ring-1 ring-inset ring-emerald-500/20">
                      <div className="absolute inset-0 rounded-lg bg-[radial-gradient(closest-side,rgba(16,185,129,0.18),transparent)] blur-[2px]" />
                      <Icon className="relative h-5 w-5 text-white" />
                    </div>
                    <div>
                      <span className="text-neutral-200 transition-colors group-hover:text-white">{skill.text}</span>
                      <div className="mt-1 text-xs text-emerald-400/80">{skill.category}</div>
                    </div>
                    {/* side accent */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-emerald-500/40 to-transparent" />
                  </motion.div>
                )
              })}
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-2 gap-4 pt-6 lg:grid-cols-4"
              initial={{ opacity: 0, y: 18 }}
              animate={isTextInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={index}
                    whileHover={prefersReducedMotion ? {} : { scale: 1.03, y: -3 }}
                    className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4 text-center shadow-xl ring-1 ring-emerald-500/10 backdrop-blur transition-all hover:border-emerald-500/40"
                  >
                    <Icon className="mx-auto mb-2 h-6 w-6 text-emerald-400" />
                    <div className="mb-0.5 text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-neutral-400">{stat.label}</div>
                    <div className="mt-3 h-px w-full bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
                  </motion.div>
                )
              })}
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-3 pt-4"
              initial={{ opacity: 0, y: 10 }}
              animate={isTextInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {[
                { icon: FiGithub, href: "https://github.com/Janishnehyan03", label: "GitHub" },
                { icon: FiInstagram, href: "https://www.instagram.com/janishnehyan03/", label: "Instagram" },
                { icon: FiLinkedin, href: "https://www.linkedin.com/in/janish-nehyan-6a12bb213/", label: "LinkedIn" },
              ].map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={prefersReducedMotion ? {} : { scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-3 text-neutral-300 shadow-md ring-1 ring-emerald-500/10 backdrop-blur transition-colors hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-emerald-400"
                    aria-label={social.label}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon size={20} />
                  </motion.a>
                )
              })}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

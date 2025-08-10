"use client"
import Image from "next/image"
import Link from "next/link"
import { easeOut, motion, useInView } from "framer-motion"
import { useRef } from "react"
import { projectsData, type Project } from "@/lib/projects"
import { FiExternalLink, FiGithub } from "react-icons/fi"

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: "-100px" })

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.12,
        ease: easeOut,
      },
    },
  }

  const imageVariants = {
    hover: {
      scale: 1.04,
      transition: {
        duration: 0.5,
        ease: easeOut,
      },
    },
  }

  const overlayVariants = {
    hidden: { opacity: 0 },
    hover: {
      opacity: 1,
      transition: { duration: 0.25 },
    },
  }

  const contentVariants = {
    hidden: { y: 12, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: 0.15 },
    },
  }

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{ y: -6 }}
      className="h-full"
    >
      <Link href={`/projects/${project.slug}`} className="block h-full">
        <motion.div
          className="group flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/60 shadow-xl shadow-black/20 ring-1 ring-emerald-500/10 backdrop-blur transition-all duration-500 hover:border-emerald-400/40 hover:shadow-emerald-500/10"
          whileHover="hover"
          layout
        >
          {/* Image */}
          <div className="relative aspect-[16/10] flex-shrink-0 overflow-hidden">
            <motion.div variants={imageVariants} className="relative h-full w-full">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500"
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                priority={index < 2}
              />
            </motion.div>

            {/* Overlay */}
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              className="absolute inset-0 flex items-end bg-gradient-to-t from-black/75 via-black/10 to-transparent p-4"
            >
              <div className="flex gap-2">
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.96 }}
                  className="rounded-full bg-emerald-500 p-2 text-white shadow-md shadow-emerald-500/30 transition-colors hover:bg-emerald-600"
                  aria-label="Open project"
                >
                  <FiExternalLink size={16} />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.96 }}
                  className="rounded-full bg-neutral-800 p-2 text-white/90 shadow-md shadow-black/30 transition-colors hover:bg-neutral-700"
                  aria-label="View source"
                >
                  <FiGithub size={16} />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Content */}
          <motion.div variants={contentVariants} className="flex flex-grow flex-col p-6">
            <motion.h3
              className="mb-2 text-lg font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-emerald-400 md:text-xl"
              whileHover={{ x: 3 }}
            >
              {project.title}
            </motion.h3>
            <motion.p
              className="mb-4 flex-grow leading-relaxed text-neutral-400 line-clamp-3"
              initial={{ opacity: 0.85 }}
              whileHover={{ opacity: 1 }}
            >
              {project.description}
            </motion.p>

            {/* Tags / Meta (optional if available later) */}
            <div className="mt-auto h-px w-full bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
            <div className="mt-3 text-sm text-neutral-500">High‑quality • Modern • Performant</div>
          </motion.div>
        </motion.div>
      </Link>
    </motion.div>
  )
}

export const ProjectsSection = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const isTitleInView = useInView(titleRef, { once: true })

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, staggerChildren: 0.08 },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 28, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: easeOut },
    },
  }

  const subtitleVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.2 },
    },
  }

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(16,185,129,0.12),rgba(0,0,0,0)),radial-gradient(900px_500px_at_90%_10%,rgba(20,184,166,0.08),rgba(0,0,0,0))] from-black to-black py-20 md:py-24 lg:py-28"
    >
      {/* Subtle grid overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          maskImage: "radial-gradient(600px 300px at 50% 0%, black, transparent)",
          WebkitMaskImage: "radial-gradient(600px 300px at 50% 0%, black, transparent)",
        }}
      />

      {/* Background glow orbs (more subtle) */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.12, 1], rotate: [0, 120, 240] }}
          transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.08, 1, 1.08], rotate: [240, 120, 0] }}
          transition={{ duration: 34, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute -bottom-44 -left-44 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl"
        />
      </div>

      <motion.div
        ref={sectionRef}
        variants={sectionVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container relative z-10 mx-auto px-6"
      >
        {/* Header */}
        <div className="mb-14 text-center md:mb-16">
          <motion.div
            ref={titleRef}
            variants={titleVariants}
            initial="hidden"
            animate={isTitleInView ? "visible" : "hidden"}
          >
            <motion.h2 className="mb-4 text-balance text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 bg-clip-text text-transparent">
                My Projects
              </span>
            </motion.h2>
          </motion.div>

          <motion.p
            variants={subtitleVariants}
            initial="hidden"
            animate={isTitleInView ? "visible" : "hidden"}
            className="mx-auto max-w-2xl text-lg text-neutral-400"
          >
            A curated selection of modern web apps and digital solutions crafted with performance and polish.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          variants={sectionVariants}
        >
          {projectsData.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </motion.div>

        {/* View All Projects */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: "0 16px 40px rgba(16, 185, 129, 0.20)" }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-3 font-semibold text-white shadow-lg shadow-emerald-500/10 ring-1 ring-emerald-500/30 transition-colors hover:from-emerald-500/90 hover:to-teal-500/90"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}

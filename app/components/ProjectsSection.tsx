// app/components/ProjectsSection.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { easeOut, motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projectsData, Project } from "@/lib/projects";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        ease: easeOut
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.4,
        ease: easeOut
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    hover: {
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  const contentVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.2
      }
    }
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <Link href={`/projects/${project.slug}`} className="block h-full">
        <motion.div
          className="flex flex-col h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden border border-gray-700/50 hover:border-teal-500/80 transition-all duration-500 group cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-teal-500/20"
          whileHover="hover"
          layout
        >
          {/* Image Container */}
          <div className="relative h-52 flex-shrink-0 overflow-hidden">
            <motion.div
              variants={imageVariants}
              className="w-full h-full relative"
            >
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="transition-all duration-500"
              />
            </motion.div>

            {/* Overlay with gradient */}
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4"
            >
              <div className="flex gap-3">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-teal-500 hover:bg-teal-600 text-white p-2 rounded-full transition-colors duration-200"
                >
                  <FiExternalLink size={16} />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full transition-colors duration-200"
                >
                  <FiGithub size={16} />
                </motion.div>
              </div>
            </motion.div>


          </div>

          {/* Content */}
          <motion.div
            variants={contentVariants}
            className="p-6 flex flex-col flex-grow"
          >
            <motion.h3
              className="text-xl font-semibold text-white mb-3 group-hover:text-teal-400 transition-colors duration-300"
              whileHover={{ x: 5 }}
            >
              {project.title}
            </motion.h3>

            <motion.p
              className="text-gray-400 text-sm line-clamp-3 mb-4 leading-relaxed flex-grow"
              initial={{ opacity: 0.7 }}
              whileHover={{ opacity: 1 }}
            >
              {project.description}
            </motion.p>


          </motion.div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const isTitleInView = useInView(titleRef, { once: true });

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: easeOut
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.3
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
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
          className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl"
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
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        ref={sectionRef}
        variants={sectionVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container mx-auto px-6 relative z-10"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            ref={titleRef}
            variants={titleVariants}
            initial="hidden"
            animate={isTitleInView ? "visible" : "hidden"}
          >
            <motion.h2
              className="text-5xl md:text-6xl font-bold text-white mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-sky-400">
                My Projects
              </span>
            </motion.h2>
          </motion.div>

          <motion.p
            variants={subtitleVariants}
            initial="hidden"
            animate={isTitleInView ? "visible" : "hidden"}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            A showcase of my latest work, featuring modern web applications and digital solutions
          </motion.p>
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={sectionVariants}
        >
          {projectsData.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(20, 184, 166, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

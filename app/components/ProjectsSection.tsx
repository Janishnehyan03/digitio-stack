"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { projectsData, type Project } from "@/lib/projects";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.8, 1, 1, 0.8]
  );

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      style={{ y, opacity }}
      className="group"
    >
      <Link href={`/projects/${project.slug}`} className="block h-full">
        <div className="relative rounded-2xl bg-white border border-gray-200 hover:shadow-md transition-all h-full flex flex-col">
          {/* Image */}
          <div className="relative mb-6 overflow-hidden rounded-t-2xl">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={800}
              height={500}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-600 text-sm flex-1">{project.description}</p>

            <div className="mt-4 flex items-center text-sm font-medium text-teal-600">
              View Project
              <FiExternalLink className="ml-2 w-4 h-4" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative min-h-screen bg-white py-24"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            ref={titleRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-gray-900">
              My <span className="text-teal-600">Projects</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 leading-relaxed">
              Discover cutting-edge web applications built with modern
              technologies and exceptional attention to detail.
            </p>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

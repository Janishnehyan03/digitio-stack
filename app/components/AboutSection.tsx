"use client";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  Award,
  CheckCircle,
  Code2,
  Coffee,
  Mail,
  MapPin,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

export const AboutSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  const skills = [
    {
      icon: Code2,
      text: "Expert in React, Next.js, and the JavaScript ecosystem.",
      category: "Frontend",
    },
    {
      icon: CheckCircle,
      text: "Responsive, mobile-first designs with Tailwind CSS.",
      category: "Design",
    },
    {
      icon: Award,
      text: "Focus on performance, accessibility, and UX.",
      category: "Quality",
    },
    {
      icon: Users,
      text: "Strong in collaboration and client communication.",
      category: "Teamwork",
    },
  ];

  const stats = [
    { label: "Projects Completed", value: "50+", icon: Award },
    { label: "Happy Clients", value: "30+", icon: Users },
    { label: "Years Experience", value: "5+", icon: Coffee },
    { label: "Technologies", value: "15+", icon: Code2 },
  ];

  return (
    <section
      id="developer-info"
      className="relative bg-white py-20 md:py-24"
      ref={sectionRef}
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-3 text-4xl font-black text-gray-900 md:text-5xl">
            About <span className="text-teal-600">Me</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            I’m Janish Nehyan, a full-stack developer passionate about building
            scalable applications that merge beautiful design with solid
            functionality.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-6 text-left hover:shadow-md transition-all"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-50">
                    <Icon className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-base font-semibold text-gray-800">
                      {skill.category}
                    </h4>
                    <p className="text-sm text-gray-600">{skill.text}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Stats & Contact */}
          <div className="flex flex-col gap-12">
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center rounded-lg border border-gray-200 bg-white p-4 text-center hover:shadow-md transition-all"
                  >
                    <Icon className="mb-2 h-6 w-6 text-teal-600" />
                    <div className="text-xl font-bold text-gray-900">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                );
              })}
            </motion.div>

            {/* Contact */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-gray-900">Get in Touch</h3>
              <Link
                href="mailto:janishnehyan03@gmail.com"
                className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 hover:shadow-md transition-all"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-50">
                  <Mail className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Email</div>
                  <div className="text-base font-medium text-gray-900">
                    janishnehyan03@gmail.com
                  </div>
                </div>
              </Link>
              <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-50">
                  <MapPin className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Location</div>
                  <div className="text-base font-medium text-gray-900">
                    Kondotty, India
                  </div>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-4">
              {[
                {
                  icon: FiGithub,
                  href: "https://github.com/Janishnehyan03",
                  label: "GitHub",
                },
                {
                  icon: FiInstagram,
                  href: "https://www.instagram.com/janishnehyan03/",
                  label: "Instagram",
                },
                {
                  icon: FiLinkedin,
                  href: "https://www.linkedin.com/in/janish-nehyan-6a12bb213/",
                  label: "LinkedIn",
                },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={
                      prefersReducedMotion ? {} : { scale: 1.05, y: -2 }
                    }
                    whileTap={{ scale: 0.95 }}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 hover:bg-teal-500 hover:text-white transition-colors"
                    aria-label={social.label}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

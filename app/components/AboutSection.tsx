// app/components/AboutSection.tsx

"use client";

import { easeOut, motion, useInView } from 'framer-motion';
import { Award, CheckCircle, Code2, Coffee, Mail, MapPin, Users } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';
import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';

export const AboutSection = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const isImageInView = useInView(imageRef, { once: true });
  const isTextInView = useInView(textRef, { once: true });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotateY: 45
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 1,
        ease: easeOut
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: easeOut
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: easeOut
      }
    })
  };

  const skills = [
    {
      icon: Code2,
      text: "Expert in React, Next.js, and the JavaScript ecosystem",
      category: "Frontend"
    },
    {
      icon: CheckCircle,
      text: "Skilled in creating responsive, mobile-first designs with Tailwind CSS",
      category: "Design"
    },
    {
      icon: Award,
      text: "Passionate about web performance, accessibility, and user experience",
      category: "Quality"
    },
    {
      icon: Users,
      text: "Experienced in collaborative development and client communication",
      category: "Teamwork"
    }
  ];

  const stats = [
    { label: "Projects Completed", value: "50+", icon: Award },
    { label: "Happy Clients", value: "30+", icon: Users },
    { label: "Years Experience", value: "5+", icon: Coffee },
    { label: "Technologies", value: "15+", icon: Code2 }
  ];

  return (
    <section id="developer-info" className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
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
          className="absolute top-20 right-20 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl"
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
          className="absolute bottom-20 left-20 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl"
        />
      </div>

      <motion.div
        ref={sectionRef}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container mx-auto px-6 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <motion.div
            ref={imageRef}
            variants={imageVariants}
            initial="hidden"
            animate={isImageInView ? "visible" : "hidden"}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative group">
              {/* Profile Image Container */}
              <motion.div
                className="relative w-80 h-80 lg:w-96 lg:h-96"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 p-1"
                  // animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-full h-full rounded-full bg-gray-900 p-2">
                    <Image
                      src="/images/profile.jpg"
                      alt="Janish Nehyan - Full Stack Developer"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    />
                  </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-teal-500 text-white p-3 rounded-full shadow-lg"
                  animate={{
                    y: [-5, 5, -5],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Code2 size={24} />
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 bg-emerald-500 text-white p-3 rounded-full shadow-lg"
                  animate={{
                    y: [5, -5, 5],
                    rotate: [0, -10, 10, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                >
                  <Award size={24} />
                </motion.div>
              </motion.div>

              {/* Contact Info Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isImageInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800/90 backdrop-blur-xl rounded-2xl p-4 border border-teal-500/30 min-w-max"
              >
                <div className="flex items-center space-x-3 text-white">
                  <Mail className="text-teal-400" size={16} />
                  <span className="text-sm font-medium">janishnehyan03@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-white mt-2">
                  <MapPin className="text-teal-400" size={16} />
                  <span className="text-sm font-medium">Kondotty </span>
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
                className="text-4xl lg:text-5xl font-bold text-white mb-4"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                Meet <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">Janish Nehyan</span>
              </motion.h2>

              <motion.div
                className="inline-block bg-gradient-to-r from-teal-500/20 to-emerald-500/20 border border-teal-500/30 rounded-full px-4 py-2 mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-teal-400 font-semibold">Full Stack Developer</span>
              </motion.div>

              <motion.p
                className="text-gray-300 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isTextInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Passionate about creating exceptional digital experiences that bridge the gap between innovative design and robust functionality. I specialize in building scalable web applications that not only look stunning but also deliver outstanding performance and user experience.
              </motion.p>
            </div>

            {/* Skills List */}
            <motion.div className="space-y-4">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={itemVariants}
                    initial="hidden"
                    animate={isTextInView ? "visible" : "hidden"}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex items-start space-x-4 p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-teal-500/50 transition-all duration-300 group"
                  >
                    <div className="bg-gradient-to-r from-teal-500 to-emerald-500 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                        {skill.text}
                      </span>
                      <div className="text-xs text-teal-400 mt-1 opacity-70">
                        {skill.category}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isTextInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-gradient-to-br from-gray-800/80 to-gray-700/80 backdrop-blur-xl rounded-xl p-4 text-center border border-gray-600/50 hover:border-teal-500/50 transition-all duration-300"
                  >
                    <Icon className="w-6 h-6 text-teal-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex space-x-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isTextInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
            >
              {[
                { icon: FiGithub, href: "https://github.com/Janishnehyan03", label: "GitHub" },
                { icon: FiInstagram, href: "https://www.instagram.com/janishnehyan03/", label: "Instagram" },
                { icon: FiLinkedin, href: "https://www.linkedin.com/in/janish-nehyan-6a12bb213/", label: "LinkedIn" },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gray-800/50 hover:bg-teal-500/20 border border-gray-600/50 hover:border-teal-500/50 text-gray-400 hover:text-teal-400 p-3 rounded-xl transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

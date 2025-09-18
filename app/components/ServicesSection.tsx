"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaCode,
  FaDatabase,
  FaMobileAlt,
  FaPaintBrush,
  FaRocket,
  FaTachometerAlt,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const servicesData = [
  {
    icon: <FaCode className="h-8 w-8 text-teal-600" />,
    title: "Full-Stack Development",
    description:
      "Robust and scalable web apps with modern frameworks like Next.js and Node.js.",
    features: ["React/Next.js", "Node.js/Express", "Database Design"],
  },
  {
    icon: <FaPaintBrush className="h-8 w-8 text-teal-600" />,
    title: "UI/UX Design",
    description:
      "Intuitive and visually appealing user interfaces with focus on usability.",
    features: ["User Research", "Prototyping", "Visual Design"],
  },
  {
    icon: <FaMobileAlt className="h-8 w-8 text-teal-600" />,
    title: "Mobile-First Development",
    description: "Responsive designs that work flawlessly across all devices.",
    features: ["Responsive Design", "Cross-Platform", "PWA Development"],
  },
  {
    icon: <FaDatabase className="h-8 w-8 text-teal-600" />,
    title: "API Development & Integration",
    description:
      "Custom APIs and third-party integrations for dynamic applications.",
    features: ["REST APIs", "GraphQL", "Third-party Integration"],
  },
  {
    icon: <FaTachometerAlt className="h-8 w-8 text-teal-600" />,
    title: "Performance & Scalability",
    description:
      "Optimized apps for speed and the ability to scale under heavy load.",
    features: ["Code Optimization", "Caching", "Load Balancing"],
  },
  {
    icon: <FaRocket className="h-8 w-8 text-teal-600" />,
    title: "Deployment & SEO",
    description:
      "End-to-end deployment and SEO strategies to boost visibility.",
    features: ["CI/CD Pipeline", "SEO Optimization", "Analytics"],
  },
];

type Service = {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
};

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="rounded-2xl border border-gray-200 bg-white hover:shadow-md transition-all p-6 flex flex-col"
    >
      <div className="mb-4">{service.icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {service.title}
      </h3>
      <p className="text-gray-600 text-sm mb-4">{service.description}</p>

      <ul className="space-y-1 text-sm text-gray-500 flex-1">
        {service.features.map((f: string) => (
          <li key={f} className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
            {f}
          </li>
        ))}
      </ul>

      <button className="mt-6 inline-flex items-center text-sm font-medium text-teal-600 hover:text-teal-700">
        Learn More <FiArrowRight className="ml-2 h-4 w-4" />
      </button>
    </motion.div>
  );
};

export const ServicesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative min-h-screen bg-white py-24"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-black text-gray-900"
          >
            Our <span className="text-teal-600">Services</span>
          </motion.h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-lg">
            End-to-end web solutions designed to transform ideas into powerful,
            scalable applications.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

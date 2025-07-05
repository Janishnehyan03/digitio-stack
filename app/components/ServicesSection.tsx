// app/components/ServicesSection.tsx

import { FaCode, FaPaintBrush, FaRocket } from "react-icons/fa";

const servicesData = [
  {
    icon: <FaCode className="h-12 w-12 text-teal-400" />,
    title: "Full-Stack Development",
    description:
      "Crafting robust and scalable web applications from front to back-end with modern frameworks like Next.js and Node.js.",
  },
  {
    icon: <FaPaintBrush className="h-12 w-12 text-teal-400" />,
    title: "UI/UX Design",
    description:
      "Designing intuitive and beautiful user interfaces that provide an exceptional user experience, focusing on usability and aesthetics.",
  },
  {
    icon: <FaRocket className="h-12 w-12 text-teal-400" />,
    title: "Deployment & SEO",
    description:
      "Optimizing and deploying your applications for performance and visibility, ensuring a fast, secure, and search-engine-friendly final product.",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          What I Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="text-center p-8 bg-black rounded-xl group transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center justify-center h-24 w-24 mx-auto mb-6 bg-gray-900 rounded-full border-2 border-teal-500/30 group-hover:border-teal-500 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// app/components/TechStackSection.tsx

import {
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPrisma,
  SiPostgresql,
  SiMysql,
  SiGraphql,
  SiDocker,
  SiNestjs,
} from "react-icons/si";

const techStack = [
  { name: "Next.js", icon: <SiNextdotjs className="h-10 w-10" /> },
  { name: "Node.js", icon: <SiNodedotjs className="h-10 w-10" /> },
  {
    name: "Express",
    icon: <SiExpress className="h-10 w-10" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="h-10 w-10" />,
  },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="h-10 w-10" /> },
  { name: "React", icon: <SiReact className="h-10 w-10" /> },
  { name: "TypeScript", icon: <SiTypescript className="h-10 w-10" /> },
  { name: "Git", icon: <SiGit className="h-10 w-10" /> },
  { name: "GitHub", icon: <SiGithub className="h-10 w-10" /> },
  { name: "Prisma", icon: <SiPrisma className="h-10 w-10" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="h-10 w-10" /> },
  { name: "MySQL", icon: <SiMysql className="h-10 w-10" /> },
  { name: "GraphQL", icon: <SiGraphql className="h-10 w-10" /> },
  { name: "Docker", icon: <SiDocker className="h-10 w-10" /> },
  { name: "NestJS", icon: <SiNestjs className="h-10 w-10" /> },
];

export const TechStackSection = () => {
  return (
    <section id="technologies" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          My Technology Stack
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center justify-center p-6 bg-black rounded-lg border border-gray-700/50 hover:border-teal-500 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-teal-400 mb-4">{tech.icon}</div>
              <h3 className="text-lg font-semibold text-white">{tech.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

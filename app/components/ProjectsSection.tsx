// app/components/ProjectsSection.tsx

import Image from "next/image";
import Link from "next/link";
import { projectsData, Project } from "@/lib/projects"; // Import data from our new file

const ProjectCard = ({ project }: { project: Project }) => (
  // The entire card is now a link to the project's detail page
  <Link href={`/projects/${project.slug}`}>
    <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700/50 hover:border-teal-500/80 transition-all duration-300 group cursor-pointer">
      <div className="relative h-52">
        <Image
          src={project.image}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm">{project.description}</p>
      </div>
    </div>
  </Link>
);

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-500">
            My Projects
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

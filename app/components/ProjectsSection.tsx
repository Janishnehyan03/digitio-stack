// app/components/ProjectsSection.tsx

import Image from "next/image";
import Link from "next/link";
import { projectsData, Project } from "@/lib/projects"; // Import data from our new file

const ProjectCard = ({ project }: { project: Project }) => (
  <Link href={`/projects/${project.slug}`} className="block h-full">
    {/* 
      1. Use flex and flex-col to stack items vertically.
      2. Use h-full to make the card fill the entire grid cell height.
    */}
    <div className="flex flex-col h-full bg-gray-900 rounded-lg overflow-hidden border border-gray-700/50 hover:border-teal-500/80 transition-all duration-300 group cursor-pointer">
      <div className="relative h-52 flex-shrink-0">
        <Image
          src={project.image}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      {/* 
        3. Use flex-grow to make this content area expand and fill any remaining vertical space.
      */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-white mb-2">
          {project.title}
        </h3>
        {/* 
          4. (Optional but recommended) Truncate long descriptions to prevent awkward text wrapping.
             This requires the line-clamp plugin (see below).
        */}
        <p className="text-gray-400 text-sm line-clamp-3">
          {project.description}
        </p>
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

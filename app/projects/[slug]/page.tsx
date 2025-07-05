// app/projects/[slug]/page.tsx

import { projectsData } from '@/lib/projects';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-black text-white min-h-screen pt-24 sm:pt-32">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-20">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-500">
              {project.title}
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-6">{project.description}</p>
         
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center items-center gap-4 mb-16">
          {/* Conditional "Live Demo" button */}
          {project.liveUrl && !project.demoPassword && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <ExternalLink className="mr-2" />
              Live Demo
            </Link>
          )}
          
        </div>

        {/* Zigzag Feature Layout */}
        <div className="space-y-20 lg:space-y-28">
          {project.features.map((feature, index) => (
            <div
              key={feature.title}
              // The `lg:flex-row-reverse` class is applied to odd-indexed items
              className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Text Content */}
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-white mb-4">{feature.title}</h2>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>

              {/* Image Content */}
              <div className="lg:w-1/2 w-full">
                <div className="relative aspect-video rounded-lg overflow-hidden border border-gray-700/50 shadow-lg">
                  <Image src={feature.image} alt={feature.title} layout="fill" objectFit="cover" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Back to Projects Link */}
        <div className="text-center mt-20 pb-20">
          <Link href="/#projects">
            <span className="text-teal-400 hover:text-teal-300 transition-colors duration-300 font-semibold">
              ← Back to all projects
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
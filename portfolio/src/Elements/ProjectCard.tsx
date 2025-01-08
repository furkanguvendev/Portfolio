import React from 'react';
import { Github, Globe } from 'lucide-react';

interface ProjectCardProps {
  project: {
    name: string,
    description: string,
    image: string,
    technologies: string[],
    link: string,
    github: string,
  };
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image Section */}
      <div className="h-48 md:h-64 w-full bg-gray-200 relative">
        <img
          src={project.image}
          alt={`${project.name} preview`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{project.name}</h3>
        <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">{project.description}</p>

        {/* Technologies */}
        <div className="mb-3 md:mb-4">
          <div className="flex flex-wrap gap-1.5 md:gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 md:px-3 py-0.5 md:py-1 bg-[#5f941a] text-white text-xs md:text-sm rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center md:justify-start gap-2 text-[#5f941a] hover:text-[#222222] transition-colors text-sm md:text-base p-2 md:p-0"
          >
            <Globe size={16} className="md:w-5 md:h-5" />
            <span>Live Site</span>
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center md:justify-start gap-2 text-gray-700 hover:text-[#222222] transition-colors text-sm md:text-base p-2 md:p-0"
          >
            <Github size={16} className="md:w-5 md:h-5" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};

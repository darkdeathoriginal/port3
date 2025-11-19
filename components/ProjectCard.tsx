import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="group relative h-full p-2">
      {/* Manga Panel Container */}
      <div className="h-full manga-panel flex flex-col p-4 hover:-translate-y-1 hover:translate-x-1 transition-all duration-100">
        
        {/* Image Section */}
        <div className="relative mb-4 border-b-4 border-black pb-4 overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity z-10 mix-blend-multiply"></div>
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-48 object-cover grayscale contrast-125 border-2 border-black animate-tremble"
            />
            
            {/* Impact Flash Text */}
            <div className="absolute bottom-0 right-0 bg-black text-white px-2 font-comic text-xl transform -rotate-3 border-2 border-white z-20">
              {project.powerLevel}%
            </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          <h3 className="font-comic text-3xl mb-2 text-black uppercase leading-none">
            {project.title}
          </h3>
          <p className="font-scribble text-lg text-gray-800 mb-6 leading-5">
            {project.description}
          </p>
          
          {/* Tech Tags - Simple rectangles */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span key={t} className="px-2 py-0 border border-black text-xs font-bold uppercase hover:bg-black hover:text-white transition-colors">
                {t}
              </span>
            ))}
          </div>

          {/* Action Buttons - Sketchy */}
          <div className="flex gap-3 mt-auto pt-4 border-t-2 border-black border-dashed">
             <a href={project.link} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 border-2 border-black hover:bg-gray-200 transition-colors font-comic text-lg py-1">
                <Github size={16} /> CODE
             </a>
             <a href={project.link} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-black text-white border-2 border-black hover:bg-white hover:text-black transition-colors font-comic text-lg py-1">
                VISIT <ExternalLink size={16} />
             </a>
          </div>
        </div>
      </div>
      
      {/* "Shadow" box offset */}
      <div className="absolute inset-0 border-2 border-black bg-black -z-10 translate-x-2 translate-y-2"></div>
    </div>
  );
};

export default ProjectCard;
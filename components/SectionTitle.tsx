import React from 'react';

interface Props {
  children: React.ReactNode;
  centered?: boolean;
}

const SectionTitle: React.FC<Props> = ({ children, centered = false }) => {
  return (
    <div className={`relative mb-16 inline-block ${centered ? 'mx-auto' : ''}`}>
      {/* Jagged Background shape */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[140%] bg-black transform -rotate-1 z-0 clip-polygon"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[130%] bg-white transform rotate-1 z-0 border-2 border-black"></div>
      
      <h2 className="relative z-10 font-comic text-6xl md:text-8xl text-black uppercase tracking-tighter transform -rotate-1 animate-boil mix-blend-hard-light">
        {children}
      </h2>
    </div>
  );
};

export default SectionTitle;
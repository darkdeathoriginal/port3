import React, { useState } from 'react';
import { Brain, Zap, Mail, ArrowDown, Smartphone, Palette, Database, Sparkles, Code, Terminal, BookOpen, Briefcase } from 'lucide-react';
import BackgroundEffects from './components/BackgroundEffects';
import ExplosionCounter from './components/ExplosionCounter';
import PsychicChat from './components/PsychicChat';
import ProjectCard from './components/ProjectCard';
import SectionTitle from './components/SectionTitle';
import { Project, Skill } from './types';

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Acadia",
    description: "Real-time attendance and timetable tracking for SRM students. Clean, modern UI with dark mode.",
    tech: ["Next.js", "Node.js", "Dark Mode"],
    image: "https://picsum.photos/600/400?grayscale&random=10",
    link: "https://github.com/darkdeathoriginal",
    powerLevel: 95
  },
  {
    id: 2,
    title: "Darkbot",
    description: "Versatile Telegram bot using GramJS. Supports external plugins and bot-to-bot communication.",
    tech: ["GramJS", "Node.js", "Telegram API"],
    image: "https://picsum.photos/600/400?grayscale&random=11",
    link: "https://github.com/darkdeathoriginal",
    powerLevel: 88
  },
  {
    id: 3,
    title: "Hydra Bot",
    description: "Multi-purpose Discord bot: Auto-roles, Music, Games (TicTacToe), and Manga downloader.",
    tech: ["Discord.js", "Node.js", "Game Logic"],
    image: "https://picsum.photos/600/400?grayscale&random=12",
    link: "https://github.com/darkdeathoriginal",
    powerLevel: 82
  },
  {
    id: 4,
    title: "Social Transfer",
    description: "Secure platform for seamless data transfer across social media with OAuth integration.",
    tech: ["OAuth", "Security", "REST APIs"],
    image: "https://picsum.photos/600/400?grayscale&random=13",
    link: "https://github.com/darkdeathoriginal",
    powerLevel: 79
  }
];

const SKILLS: Skill[] = [
  { name: "Web & Frontend", level: 92, icon: Palette, color: "text-black" }, // React, Next, Tailwind
  { name: "Mobile (iOS)", level: 85, icon: Smartphone, color: "text-black" }, // SwiftUI, React Native
  { name: "Backend & DB", level: 80, icon: Database, color: "text-black" }, // Node, Prisma, SQL
  { name: "Languages", level: 88, icon: Code, color: "text-black" }, // JS, TS, Python, C++
];

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative min-h-screen text-black font-scribble overflow-hidden bg-white">
      <BackgroundEffects />

      {loading && <ExplosionCounter onComplete={() => setLoading(false)} />}

      {!loading && (
        <main className="relative z-10 flex flex-col w-full">
          
          {/* Navbar - Taped Note style */}
          <nav className="fixed top-0 w-full z-40 px-6 py-4 flex justify-between items-center pointer-events-none">
            <div className="pointer-events-auto bg-white border-2 border-black px-3 py-1 shadow-[4px_4px_0px_0px_#000] transform -rotate-2 hover:rotate-0 transition-transform">
              <span className="font-comic text-2xl tracking-widest">ANWIN<span className="bg-black text-white px-1 ml-1">SHARON</span></span>
            </div>
            <div className="pointer-events-auto hidden md:flex gap-6 bg-white/90 p-2 border-2 border-black backdrop-blur-sm transform rotate-1 shadow-[4px_4px_0px_0px_#000]">
              {['Abilities', 'Chronicles', 'Projects', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="font-bold text-xl hover:underline decoration-wavy underline-offset-4 decoration-2 uppercase">
                  {item}
                </a>
              ))}
            </div>
          </nav>

          {/* Hero Section - Manga Cover Style */}
          <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center relative mt-10 md:mt-0">
             {/* Giant Background Text */}
             <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none overflow-hidden">
               <span className="text-[15vw] font-comic leading-none whitespace-nowrap">DEVELOPER</span>
             </div>

             <div className="relative mb-8 group cursor-pointer">
                {/* Jagged Aura */}
                <div className="absolute -inset-6 bg-black rounded-full animate-pulse opacity-10 blur-sm"></div>
                <div className="absolute -inset-2 border-2 border-black rounded-full border-dashed animate-[spin_10s_linear_infinite]"></div>
                
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-[4px] border-black bg-white relative z-10 overflow-hidden flex items-center justify-center hover:scale-105 transition-transform duration-300">
                    {/* Mob Avatar SVG - "Low Quality" Style */}
                    <svg viewBox="0 0 200 200" className="w-full h-full bg-white">
                        {/* Head Shadow */}
                        <circle cx="105" cy="105" r="70" fill="#ddd" />
                        {/* Head */}
                        <circle cx="100" cy="100" r="70" fill="white" stroke="black" strokeWidth="4" />
                        {/* Ears */}
                        <path d="M 30 100 Q 25 110 32 120" stroke="black" strokeWidth="3" fill="white" />
                        <path d="M 170 100 Q 175 110 168 120" stroke="black" strokeWidth="3" fill="white" />
                        {/* Hair (Bowl cut) */}
                        <path d="M 28 95 C 20 10 180 10 172 95 L 165 110 L 155 95 L 140 110 L 125 95 L 100 110 L 75 95 L 60 110 L 45 95 L 35 110 L 28 95 Z" fill="black" stroke="black" strokeWidth="2" />
                        {/* Eyes (Deadpan dots) */}
                        <circle cx="70" cy="125" r="4" fill="black" />
                        <circle cx="130" cy="125" r="4" fill="black" />
                        {/* Eyebrows (Tiny dashes) */}
                        <line x1="65" y1="115" x2="75" y2="117" stroke="black" strokeWidth="2" />
                        <line x1="125" y1="117" x2="135" y2="115" stroke="black" strokeWidth="2" />
                        {/* Nose */}
                        <path d="M 100 130 L 102 135" stroke="black" strokeWidth="2" />
                        {/* Mouth (Straight line) */}
                        <line x1="90" y1="150" x2="110" y2="150" stroke="black" strokeWidth="2" />
                        {/* Cheek lines */}
                        <line x1="40" y1="135" x2="50" y2="140" stroke="#ccc" strokeWidth="2" />
                        <line x1="45" y1="130" x2="55" y2="135" stroke="#ccc" strokeWidth="2" />
                    </svg>
                </div>
                
                {/* Sticker */}
                <div className="absolute -bottom-4 -right-4 bg-white border-2 border-black px-3 py-1 font-comic text-xl transform rotate-12 z-20 shadow-[2px_2px_0px_black]">
                  GPA 8.12
                </div>
             </div>

             <h1 className="font-comic text-6xl md:text-9xl mb-4 text-black leading-[0.85] mix-blend-multiply animate-tremble">
               FULL STACK <br/> 
               <span className="text-transparent bg-clip-text bg-black text-stroke-white">ESPER</span>
             </h1>
             
             <div className="bg-white border-2 border-black p-4 max-w-xl mx-auto transform rotate-1 shadow-[6px_6px_0px_black] mb-12 relative z-20">
               <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-black/20 rounded-full blur-sm"></div>
               <p className="font-scribble text-2xl leading-7">
                 "Passionate software developer skilled in React, Next.js, and SwiftUI. 
                 I build intuitive, high-performance systems that exorcise bad UX."
               </p>
             </div>

             <a href="#projects" className="group bg-black text-white font-comic text-2xl px-10 py-4 border-2 border-transparent hover:bg-white hover:text-black hover:border-black transition-colors shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] z-20">
               WITNESS MY WORK <ArrowDown className="inline ml-2 group-hover:translate-y-1 transition-transform"/>
             </a>
          </section>

          {/* Skills Section - Raw Stats */}
          <section id="abilities" className="w-full py-24 bg-white relative border-t-4 border-black">
            <div className="max-w-5xl mx-auto px-6">
              <SectionTitle centered>Psychic Abilities</SectionTitle>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
                {SKILLS.map((skill, idx) => (
                  <div key={skill.name} className="relative">
                    <div className="flex justify-between items-end mb-2">
                      <div className="flex items-center gap-3">
                         <skill.icon size={28} className="animate-bounce" />
                         <h3 className="font-comic text-4xl">{skill.name}</h3>
                      </div>
                      <span className="font-scribble text-2xl">{skill.level}%</span>
                    </div>
                    
                    {/* Scribbled Progress Bar */}
                    <div className="w-full h-8 border-b-4 border-black relative">
                       <div 
                         className="absolute bottom-0 left-0 h-6 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMTBMMTAgMFoiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==')] opacity-80"
                         style={{ width: `${skill.level}%` }}
                       ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center font-scribble text-xl text-gray-600">
                  <p>Also versed in: Docker, AWS (EC2, S3), Git, Redis, WebSockets, ffmpeg</p>
              </div>
            </div>
          </section>

          {/* Experience / Education Section - "Chronicles" */}
          <section id="chronicles" className="w-full py-24 bg-gray-50 relative border-t-4 border-black overflow-hidden">
            {/* Background chaos */}
            <div className="absolute top-0 right-0 w-64 h-64 border-l-4 border-b-4 border-black opacity-10 transform rotate-12 translate-x-20 -translate-y-20"></div>
            
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <SectionTitle centered>Chronicles</SectionTitle>
                
                <div className="space-y-12 mt-16">
                    {/* Item 1 */}
                    <div className="relative pl-8 border-l-4 border-black border-dashed">
                        <div className="absolute -left-3 top-0 w-6 h-6 bg-black rounded-full animate-ping opacity-20"></div>
                        <div className="absolute -left-2 top-1 w-4 h-4 bg-black rounded-full"></div>
                        
                        <div className="bg-white border-2 border-black p-6 shadow-[6px_6px_0px_black] transform -rotate-1 hover:rotate-0 transition-transform">
                            <div className="flex justify-between items-start flex-wrap gap-2">
                                <h3 className="font-comic text-3xl uppercase">iOS Intern @ Infosys</h3>
                                <span className="font-scribble font-bold bg-black text-white px-2 py-1 transform rotate-2 text-sm">Apr 2025 - May 2025</span>
                            </div>
                            <p className="mt-2 font-scribble text-lg">
                                Developed a fast, lightweight iOS library management app. Applied Agile methodologies (Scrum/Jira) and survived corporate code reviews.
                            </p>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="relative pl-8 border-l-4 border-black border-dashed">
                        <div className="absolute -left-2 top-1 w-4 h-4 bg-white border-2 border-black rounded-full"></div>
                        
                        <div className="bg-white border-2 border-black p-6 shadow-[6px_6px_0px_black] transform rotate-1 hover:rotate-0 transition-transform">
                            <div className="flex justify-between items-start flex-wrap gap-2">
                                <h3 className="font-comic text-3xl uppercase">Open Source Contributor</h3>
                                <span className="font-scribble font-bold bg-white border border-black px-2 py-1 transform -rotate-2 text-sm">Jan 2024 - Present</span>
                            </div>
                            <p className="mt-2 font-scribble text-lg">
                                Contributor to <span className="font-bold">[GramJS]</span>. Optimized memory usage for file uploads and enhanced Telegram MTProto API integration.
                            </p>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className="relative pl-8 border-l-4 border-black border-dashed">
                        <div className="absolute -left-2 top-1 w-4 h-4 bg-black rounded-full"></div>
                        
                        <div className="bg-white border-2 border-black p-6 shadow-[6px_6px_0px_black] transform -rotate-1 hover:rotate-0 transition-transform">
                            <div className="flex justify-between items-start flex-wrap gap-2">
                                <h3 className="font-comic text-3xl uppercase">B.Tech Computer Science</h3>
                                <span className="font-scribble font-bold bg-gray-200 px-2 py-1 text-sm">SRM Institute (2026)</span>
                            </div>
                            <p className="mt-2 font-scribble text-lg">
                                GPA: 8.12/10. Studying Architecture, Advanced Programming, and Systems.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="w-full py-24 max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
               <SectionTitle centered>Battle Records</SectionTitle>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-4">
              {PROJECTS.map((project) => (
                <div key={project.id} className="h-[500px]">
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section - Rough Flyer */}
          <section id="contact" className="w-full py-32 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-200 to-white relative border-t-4 border-black">
             <div className="max-w-2xl mx-auto px-4 text-center relative z-10">
                <div className="bg-white border-[3px] border-black p-8 shadow-[10px_10px_0px_black] transform -rotate-1">
                  <div className="border-b-2 border-dashed border-black pb-4 mb-6">
                     <h2 className="font-comic text-6xl text-black uppercase">
                       CONTACT ME
                     </h2>
                  </div>
                  
                  <p className="font-scribble text-3xl mb-8">
                    Ready to build high-performance systems?
                  </p>
                  
                  <div className="flex flex-col gap-4 items-center">
                    <a 
                        href="mailto:anwinsharon@gmail.com" 
                        className="flex items-center gap-3 bg-black text-white font-comic text-2xl px-8 py-3 hover:bg-white hover:text-black border-4 border-black transition-all w-full md:w-auto justify-center"
                    >
                        <Mail size={24} />
                        anwinsharon@gmail.com
                    </a>
                    <div className="flex gap-4">
                        <a href="https://github.com/darkdeathoriginal" target="_blank" rel="noreferrer" className="font-bold underline hover:bg-black hover:text-white px-1">GitHub</a>
                        <a href="https://linkedin.com/in/anwin-sharon-a30344250" target="_blank" rel="noreferrer" className="font-bold underline hover:bg-blue-600 hover:text-white px-1">LinkedIn</a>
                        <a href="https://anwinsharon.com" target="_blank" rel="noreferrer" className="font-bold underline hover:bg-purple-600 hover:text-white px-1">Website</a>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-center gap-4 text-gray-500 font-scribble">
                     <span>*No spirits attached to emails</span>
                  </div>
                </div>
             </div>
          </section>

          {/* Footer */}
          <footer className="w-full py-12 bg-black text-center text-white border-t-4 border-white">
            <div className="flex justify-center gap-4 mb-4">
              <Sparkles className="animate-spin" />
              <span className="font-comic text-2xl">100%</span>
              <Sparkles className="animate-spin" />
            </div>
            <p className="font-scribble opacity-60 text-lg">
              © {new Date().getFullYear()} Anwin Sharon.
            </p>
          </footer>

          <PsychicChat />
        </main>
      )}
    </div>
  );
}

export default App;
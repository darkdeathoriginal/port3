import React from 'react';

const BackgroundEffects: React.FC = () => {
  // Generate random debris
  const debris = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() * 40 + 10,
    rotation: Math.random() * 360,
    delay: Math.random() * 5,
    shape: Math.random() > 0.5 ? 'polygon(0% 0%, 100% 0%, 50% 100%)' : 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)' 
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Static Screentone Background */}
      <div className="absolute inset-0 bg-screentone opacity-20"></div>

      {/* Speed Lines (Central) */}
      <svg className="absolute inset-0 w-full h-full opacity-10" preserveAspectRatio="none">
        {Array.from({ length: 20 }).map((_, i) => (
          <line 
            key={i}
            x1="50%" 
            y1="50%" 
            x2={`${Math.random() * 100}%`} 
            y2={`${Math.random() > 0.5 ? 0 : 100}%`} 
            stroke="black" 
            strokeWidth={Math.random() * 3 + 1}
          />
        ))}
      </svg>

      {/* Floating Debris (Rocks) */}
      {debris.map((rock) => (
        <div
          key={rock.id}
          className="absolute bg-white border-2 border-black animate-float"
          style={{
            left: rock.left,
            top: rock.top,
            width: `${rock.size}px`,
            height: `${rock.size}px`,
            transform: `rotate(${rock.rotation}deg)`,
            clipPath: rock.shape,
            animationDelay: `${rock.delay}s`,
          }}
        >
           {/* Hatching inside rock */}
           <div className="absolute inset-0 opacity-20" style={{
             backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, #000 2px, #000 3px)'
           }}></div>
        </div>
      ))}
    </div>
  );
};

export default BackgroundEffects;
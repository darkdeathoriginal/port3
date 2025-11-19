import React, { useState, useEffect } from 'react';

interface Props {
  onComplete: () => void;
}

const ExplosionCounter: React.FC<Props> = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState<'charging' | 'exploding'>('charging');

  useEffect(() => {
    const duration = 2500;
    const intervalTime = 20; // Fast updates
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      // Non-linear progress, gets faster at the end
      const progress = Math.min(Math.floor(Math.pow(currentStep / steps, 2) * 100), 100);
      setCount(progress);

      if (progress >= 100) {
        clearInterval(timer);
        setPhase('exploding');
        setTimeout(onComplete, 800); 
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[60] flex flex-col items-center justify-center bg-white transition-all duration-200 ${phase === 'exploding' ? 'invert' : ''}`}>
      
      {/* Background Speed Lines */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-20">
         <div className="w-[200vw] h-[200vh] bg-[conic-gradient(from_0deg,transparent_0deg,black_10deg,transparent_20deg)] animate-[spin_2s_linear_infinite]"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="font-scribble text-2xl mb-4 animate-bounce">Accumulating Stress...</div>
        
        <div className="relative">
          <span className={`font-comic text-[15rem] leading-none tracking-tighter ${count > 90 ? 'animate-shake' : 'animate-tremble'}`}>
            {count}
          </span>
          <span className="absolute top-0 -right-12 font-comic text-6xl">%</span>
        </div>

        <div className="mt-8 w-64 h-8 border-4 border-black p-1">
           <div 
             className="h-full bg-black transition-all duration-75 ease-out"
             style={{ width: `${count}%` }}
           ></div>
        </div>
        
        {count > 80 && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <div className="font-comic text-red-600 text-9xl opacity-50 animate-ping">EXPLOSION</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExplosionCounter;
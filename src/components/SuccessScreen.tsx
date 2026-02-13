import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import SodaImage from './SodaImage';

const SuccessScreen: React.FC = () => {
    // Continuous gentle confetti
    useEffect(() => {
        const interval = setInterval(() => {
            confetti({
                particleCount: 2,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#ffb7d5', '#a6e4ff', '#fff59e'],
                zIndex: 50
            });
            confetti({
                particleCount: 2,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#ffb7d5', '#a6e4ff', '#fff59e'],
                zIndex: 50
            });
        }, 800);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-full flex flex-col items-center justify-between p-6 pb-12 pt-12 relative overflow-hidden animate-pop-in no-scrollbar bg-gradient-to-b from-transparent via-white/20 to-transparent">
            
            {/* Background Floating Elements */}
             <div className="absolute inset-0 pointer-events-none z-0">
                <img src="/-raw-images/-raw-icons/image.png" className="absolute top-10 left-[-20px] w-20 h-20 opacity-30 animate-float" style={{ animationDuration: '6s' }} alt="bg-bubble" />
                <img src="/-raw-images/-raw-icons/image%20copy.png" className="absolute bottom-40 right-[-10px] w-24 h-24 opacity-30 animate-float" style={{ animationDuration: '7s', animationDelay: '1s' }} alt="bg-bubble" />
                <img src="/-raw-images/-raw-icons/image%20copy%207.png" className="absolute top-1/4 left-8 w-8 h-8 opacity-60 animate-pulse" alt="sparkle" />
                 <img src="/-raw-images/-raw-icons/image%20copy%207.png" className="absolute top-1/2 right-12 w-10 h-10 opacity-60 animate-pulse" style={{ animationDelay: '0.5s'}} alt="sparkle" />
             </div>

            {/* Title Header */}
            <div className="relative z-10 text-center mt-6 animate-bounce-slow">
                 <div className="bg-white/80 backdrop-blur-md px-8 py-3 rounded-full border-4 border-pop-pink shadow-[0_8px_0_rgba(255,105,180,0.4)] inline-block transform rotate-[-2deg] mb-4 hover:scale-105 transition-transform">
                    <h1 className="font-soda text-5xl md:text-6xl text-pop-pink drop-shadow-sm tracking-wide" style={{ WebkitTextStroke: '2px white', paintOrder: 'stroke fill' }}>
                        SHE SAID YES!
                    </h1>
                 </div>
                 <p className="font-handwriting text-3xl text-pop-purple rotate-2 drop-shadow-md">Best. Day. Ever. 💖</p>
                 <p className="font-display text-[10px] font-bold text-pop-purple/60 uppercase tracking-[0.15em] mt-2 italic drop-shadow-sm">
                   But you had no choice, you will always be mine
                 </p>
            </div>

            {/* Main Visual: Celebration Polaroid + Saja Stickers */}
            <div className="relative z-10 flex-1 flex items-center justify-center w-full">
                
                {/* Cheerful Can */}
                 <img src="/-raw-images/-raw-icons/image%20copy%205.png" className="absolute w-32 h-auto -left-2 bottom-0 animate-can-rotate z-30 drop-shadow-2xl transform scale-x-[-1]" alt="Happy Can" />
                 
                 {/* Floating Love Bubble */}
                 <img src="/-raw-images/-raw-icons/image.png" className="absolute w-20 h-20 -right-2 top-10 animate-wiggle z-30 drop-shadow-xl" alt="Love Bubble" />

                {/* Main Success Polaroid */}
                <div className="bg-white p-3 pb-10 rounded-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] transform rotate-2 border-[6px] border-white w-64 hover:rotate-0 hover:scale-105 transition-all duration-500 relative z-20">
                    <div className="w-full h-64 bg-gray-100 overflow-hidden rounded-lg border-2 border-gray-100 relative group">
                         <SodaImage 
                            src="/-raw-images/-raw-photoshoots/WhatsApp Image 2026-02-12 at 8.46.23 PM.jpeg" 
                            alt="Success Love" 
                            imageClassName="scale-125 object-center"
                         />
                    </div>
                    <div className="absolute bottom-3 left-0 right-0 text-center">
                        <span className="font-handwriting text-2xl text-pop-dark font-bold">Forever Us ✨</span>
                    </div>
                    
                    {/* Washi Tape Decoration */}
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-pop-blue/50 backdrop-blur-sm rotate-[-2deg] shadow-sm"></div>
                </div>

            </div>

            {/* Action Button: Replay */}
             <button 
                onClick={() => window.location.reload()}
                className="group relative w-full h-24 rounded-full border-8 border-white shadow-[0_10px_40px_-10px_rgba(166,228,255,0.8)] overflow-hidden transition-transform hover:scale-105 active:scale-95 active:shadow-sm z-20 mt-4 mb-4"
              >
                {/* Holographic Background */}
                <div className="absolute inset-0 holographic opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-white/10" />
                
                {/* Shine animation */}
                <div className="absolute inset-0 w-full h-full">
                     <div className="absolute top-0 -inset-full h-full w-1/2 z-20 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/40 group-hover:animate-shine" />
                </div>

                <div className="relative z-10 flex items-center justify-center gap-3 h-full w-full">
                   <span className="material-symbols-outlined text-4xl text-white animate-spin-slow drop-shadow-md" style={{ WebkitTextStroke: '1px #29b6f6' }}>
                    history
                   </span>
                   <span className="font-soda text-3xl md:text-4xl tracking-tight text-white drop-shadow-md" style={{ WebkitTextStroke: '1.5px #29b6f6', paintOrder: 'stroke fill', textShadow: '2px 2px 0px rgba(41,182,246,0.4)' }}>
                    Replay Our Story
                   </span>
                </div>
              </button>

        </div>
    );
};

export default SuccessScreen;

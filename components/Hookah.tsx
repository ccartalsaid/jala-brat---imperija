import React from 'react';

const Hookah: React.FC = () => {
  return (
    <div
      className="absolute"
      style={{
        width: '60px',
        height: '70px',
        bottom: '0px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
      aria-label="Hookah"
    >
        <div className="relative w-full h-full flex flex-col items-center">
            {/* Bowl with coals */}
            <div className="w-5 h-3 bg-stone-500 rounded-t-sm relative">
                {/* Coals */}
                <div className="absolute -top-1 left-1 w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></div>
                <div className="absolute -top-1 right-1 w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse delay-75"></div>
            </div>
            
            {/* Tray */}
            <div className="w-8 h-1 bg-gray-400 rounded-full -mt-0.5"></div>

            {/* Stem */}
            <div className="w-1.5 flex-grow bg-gradient-to-b from-gray-300 to-gray-500"></div>

            {/* Glass Base */}
            <div className="w-10 h-8 bg-purple-500/40 border-2 border-purple-400/60 rounded-t-lg rounded-b-2xl relative overflow-hidden">
                {/* Water */}
                <div className="absolute bottom-0 w-full h-1/2 bg-indigo-500/50"></div>
            </div>

            {/* Hose */}
            <div className="absolute bottom-6 -right-5 w-8 h-6 border-4 border-gray-700 rounded-full border-l-transparent border-b-transparent transform -rotate-45"></div>
        </div>
    </div>
  );
};

export default Hookah;

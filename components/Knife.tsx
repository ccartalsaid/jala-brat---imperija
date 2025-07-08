import React from 'react';

const Knife: React.FC = () => {
  return (
    <div
      className="absolute"
      style={{
        width: '100px',
        height: '40px',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%) rotate(-45deg)',
      }}
      aria-label="Knife"
    >
      {/* Handle */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[35px] h-[18px] bg-gray-800 rounded-sm border-2 border-black"></div>
      
      {/* Blade */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[65px] h-[14px] bg-gradient-to-r from-gray-300 to-gray-500 border-y border-gray-400"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 15% 50%)'
        }}
      >
        {/* Shine */}
        <div className="absolute top-[2px] left-[5px] w-[50px] h-[2px] bg-white/70 rounded-full"></div>
      </div>
    </div>
  );
};

export default Knife;
import React from 'react';

const Microphone: React.FC = () => {
  return (
    <div
      className="absolute"
      style={{
        width: '60px',
        height: '65px',
        bottom: '5px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
      aria-label="Microphone"
    >
      {/* Mic head */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-gray-300 rounded-full border-2 border-gray-400">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-500 to-gray-800 opacity-30"></div>
        {/* Mic top grill */}
         <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-7 h-4 bg-black/20 rounded-full"></div>
      </div>
      
      {/* Mic body */}
      <div className="absolute top-[28px] left-1/2 -translate-x-1/2 w-4 h-6 bg-yellow-400 border-x-2 border-yellow-500"></div>

      {/* Mic stand */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-8 bg-gray-600"></div>
      
      {/* Mic stand base */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-2 bg-gray-700 rounded-t-sm"></div>
    </div>
  );
};

export default Microphone;

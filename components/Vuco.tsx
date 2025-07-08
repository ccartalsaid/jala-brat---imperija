import React from 'react';

const Vuco: React.FC = () => {
  return (
    <div
      className="absolute"
      style={{
        width: '50px',
        height: '70px',
        bottom: '0px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
      aria-label="Siniša Vuco"
    >
      {/* Head */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-orange-200 rounded-full z-10" >
         {/* Hair */}
        <div className="absolute -top-1 left-[-8px] w-12 h-12 bg-stone-800 rounded-t-full rounded-b-lg -z-10"></div>
      </div>
       
      {/* Body */}
      <div className="absolute bottom-0 w-full h-[45px] bg-black rounded-t-md">
        {/* Arm */}
        <div className="absolute top-1 -left-2 w-3 h-10 bg-gray-800 rounded-l-md"></div>
        
        {/* Wine Glass */}
        <div className="absolute top-2 -right-3 w-4 h-5">
            {/* Glass bowl */}
            <div className="absolute top-0 w-full h-3 bg-red-800/50 border-2 border-white/30 rounded-t-full"></div>
            {/* Glass stem */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-2 bg-white/30"></div>
        </div>
      </div>
    </div>
  );
};

export default Vuco;
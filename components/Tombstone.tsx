import React from 'react';

const Tombstone: React.FC = () => {
  return (
    <div
      className="absolute"
      style={{
        width: '70px',
        height: '70px',
        bottom: '0px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
      aria-label="Tombstone"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Main stone shape */}
        <div className="w-[55px] h-full bg-gray-500 rounded-t-3xl border-2 border-gray-600 shadow-inner">
            {/* RIP text */}
            <div className="text-center mt-4 font-serif font-bold text-xl text-gray-800">
                RIP
            </div>
             {/* Cross */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-4 bg-gray-600">
                 <div className="absolute top-1/2 -translate-y-1/2 -left-1 w-4 h-1 bg-gray-600"></div>
            </div>
            {/* Cracks */}
            <div className="absolute top-10 right-3 w-0.5 h-4 bg-black/20 transform rotate-12"></div>
        </div>
      </div>
    </div>
  );
};

export default Tombstone;

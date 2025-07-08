import React from 'react';

const Lamborghini: React.FC = () => {
  return (
    <div
      className="absolute"
      style={{
        width: '120px',
        height: '55px',
        bottom: '0px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      {/* Spoiler */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[95px] h-[5px] bg-gray-800 rounded-sm z-10">
          <div className="absolute bottom-0 left-2 w-1 h-2 bg-gray-700"></div>
          <div className="absolute bottom-0 right-2 w-1 h-2 bg-gray-700"></div>
      </div>
      {/* Body */}
      <div
        className="absolute bottom-0 w-full h-[45px] bg-yellow-400 border-b-4 border-yellow-600"
        style={{
            clipPath: 'polygon(0 100%, 15% 20%, 85% 20%, 100% 100%)'
        }}
      ></div>
      {/* Windshield */}
      <div 
        className="absolute top-3 left-1/2 -translate-x-1/2 w-[70px] h-[15px] bg-black rounded-t-md opacity-80" 
        style={{clipPath: 'polygon(10% 0, 90% 0, 100% 100%, 0% 100%)'}}>
      </div>
      {/* Headlights */}
      <div className="absolute bottom-[5px] left-[10px] w-4 h-1.5 bg-white rounded-sm skew-x-[-20deg]"></div>
      <div className="absolute bottom-[5px] right-[10px] w-4 h-1.5 bg-white rounded-sm skew-x-[20deg]"></div>
    </div>
  );
};

export default Lamborghini;
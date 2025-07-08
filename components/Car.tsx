import React, { useMemo } from 'react';
import { CarData } from '../types';
import { CAR_WIDTH, CAR_HEIGHT } from '../constants';

interface CarProps {
  data: CarData;
}

const Car: React.FC<CarProps> = ({ data }) => {
  const { position } = data;

  const carColor = useMemo(() => {
    const colors = ['bg-red-600', 'bg-blue-600', 'bg-green-600', 'bg-purple-600', 'bg-gray-200'];
    return colors[data.id % colors.length];
  }, [data.id]);

  return (
    <div
      className={`absolute ${carColor} border-2 border-gray-800 rounded-lg shadow-md`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${CAR_WIDTH}px`,
        height: `${CAR_HEIGHT}px`,
      }}
    >
        {/* Windows */}
        <div className="absolute top-[5%] left-[15%] w-[30%] h-[80%] bg-black/40 rounded-sm"></div>
        <div className="absolute top-[5%] right-[15%] w-[30%] h-[80%] bg-black/40 rounded-sm"></div>
        
        {/* Wheels */}
        <div className="absolute -bottom-[6px] left-[12px] w-[18px] h-[10px] bg-gray-800 rounded-b-md"></div>
        <div className="absolute -bottom-[6px] right-[12px] w-[18px] h-[10px] bg-gray-800 rounded-b-md"></div>

        {/* Headlights */}
        <div
            className="absolute top-1/2 -translate-y-1/2 w-1.5 h-3 bg-yellow-300/80 rounded-sm"
            style={{ [data.direction === 1 ? 'right' : 'left']: '2px' }}
        ></div>
    </div>
  );
};

export default Car;
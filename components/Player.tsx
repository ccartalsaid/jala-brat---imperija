import React from 'react';
import { Position } from '../types';
import { PLAYER_WIDTH, PLAYER_HEIGHT } from '../constants';

interface PlayerProps {
  position: Position;
}

const Player: React.FC<PlayerProps> = ({ position }) => {
  return (
    <div
      className="absolute"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${PLAYER_WIDTH}px`,
        height: `${PLAYER_HEIGHT}px`,
        transition: 'left 0.1s linear, top 0.1s linear',
      }}
      aria-label="Jala Brat"
    >
      {/* Head */}
      <div className="absolute top-1 left-1/2 -translate-x-1/2 w-6 h-6 bg-orange-200 rounded-full z-10" >
        {/* Hair */}
        <div className="absolute -top-px w-full h-3 bg-black rounded-t-lg"></div>
        {/* Sunglasses */}
        <div className="absolute top-[9px] left-1/2 -translate-x-1/2 w-[22px] h-[7px] bg-black rounded-sm border border-gray-600"></div>
         {/* Beard */}
        <div className="absolute bottom-[-3px] left-1/2 -translate-x-1/2 w-5 h-4 bg-stone-800 rounded-b-md"></div>
      </div>

      {/* Body / Outfit */}
      <div className="absolute bottom-0 w-full h-[65%] bg-zinc-800 rounded-t-md">
         {/* Arms */}
        <div className="absolute top-1 -left-2 w-3 h-10 bg-zinc-700 rounded-l-md"></div>
        <div className="absolute top-1 -right-2 w-3 h-10 bg-zinc-700 rounded-r-md"></div>
        {/* Jacket details */}
        <div className="absolute top-0 w-full h-full bg-black rounded-t-md">
            {/* Gold Chain */}
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[18px] h-1.5 bg-yellow-400 rounded-full"></div>
            {/* Zipper */}
            <div className="absolute top-4 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-gray-500"></div>
        </div>
      </div>
    </div>
  );
};

export default Player;
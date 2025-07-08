import React from 'react';
import { Position, CarData } from '../types';
import { GAME_WIDTH, GAME_HEIGHT, CAR_LANES_Y } from '../constants';
import Player from './Player';
import Car from './Car';
import Lamborghini from './Lamborghini';
import Microphone from './Microphone';
import Knife from './Knife';
import Tombstone from './Tombstone';
import Vuco from './Vuco';
import Hookah from './Hookah';

interface GameBoardProps {
  playerPosition: Position;
  cars: CarData[];
  level: number;
}

const GameBoard: React.FC<GameBoardProps> = ({ playerPosition, cars, level }) => {

  const renderGoal = () => {
    switch(level) {
      case 1:
      case 2:
        return <Lamborghini />;
      case 3:
        return <Microphone />;
      case 4:
        return <Knife />;
      case 5:
        return <Tombstone />;
      case 6:
        return <Vuco />;
      case 7:
        return <Hookah />;
      default:
        return <Lamborghini />;
    }
  }

  const getSidewalkColor = () => {
    switch(level) {
      case 1: return 'bg-gray-600';
      case 2: return 'bg-teal-800';
      case 3: return 'bg-gray-800';
      case 4: return 'bg-gray-900 border-t-2 border-red-500';
      case 5: return 'bg-green-900/50 border-t-2 border-gray-600';
      case 6: return 'bg-yellow-200'; // Sandy sidewalk for Split
      case 7: return 'bg-indigo-900 border-t-2 border-purple-500'; // Ključ sidewalk
      default: return 'bg-gray-600';
    }
  }
  
  return (
    <div
      className="relative border-4 border-gray-600 overflow-hidden shadow-2xl bg-gray-700"
      style={{ width: GAME_WIDTH, height: GAME_HEIGHT }}
    >
      {/* Level-specific backgrounds */}
      {level === 2 && (
        <div className="absolute top-20 left-0 w-full h-[200px] z-[-1] bg-gradient-to-b from-indigo-600 to-gray-800">
          {/* Sarajevo building silhouettes */}
          <div className="absolute bottom-0 left-[5%] w-16 h-24 bg-black/40"></div>
          <div className="absolute bottom-0 left-[20%] w-24 h-32 bg-black/30"></div>
          <div className="absolute bottom-0 left-[45%] w-20 h-48 bg-black/40"></div>
          <div className="absolute bottom-0 left-[70%] w-16 h-28 bg-black/30"></div>
          <div className="absolute bottom-0 left-[85%] w-20 h-20 bg-black/50"></div>
        </div>
      )}
      {level === 3 && (
        <div className="absolute inset-0 z-[-1] bg-gradient-to-b from-purple-900 via-black to-gray-900">
           {/* Studio/City neon lights effect */}
           <div className="absolute top-1/4 left-0 w-full h-1 bg-pink-500/50 blur-lg"></div>
           <div className="absolute top-1/2 right-0 w-1/2 h-1 bg-cyan-400/40 blur-xl"></div>
           <div className="absolute bottom-1/4 left-0 w-1/3 h-1 bg-yellow-400/30 blur-lg"></div>
           <div className="absolute font-black text-8xl text-yellow-400/10" style={{top: '80px', left: '50px', transform: 'rotate(-15deg)'}}>IMPERIJA</div>
        </div>
      )}
       {level === 4 && (
        <div className="absolute inset-0 z-[-1] bg-gradient-to-b from-red-900 via-black to-black">
           <div className="absolute font-black text-8xl text-red-500/10" style={{top: '120px', right: '40px', transform: 'rotate(10deg)'}}>OSVETA</div>
        </div>
      )}
      {level === 5 && (
        <div className="absolute inset-0 z-[-1] bg-gradient-to-b from-gray-800 via-black to-black">
           <div className="absolute top-1/3 left-0 w-full h-1/2 bg-gray-400/10 blur-2xl animate-pulse"></div>
           <div className="absolute font-black text-9xl text-gray-500/10" style={{top: '180px', left: '60px', transform: 'rotate(-5deg)'}}>RIP</div>
        </div>
      )}
      {level === 6 && (
        <div className="absolute inset-0 z-[-1] bg-gradient-to-b from-cyan-400 via-blue-600 to-gray-700">
           {/* Sun */}
           <div className="absolute top-10 right-10 w-20 h-20 bg-yellow-300 rounded-full blur-xl"></div>
           {/* Palm Trees */}
           <div className="absolute bottom-[80px] left-[50px] w-4 h-24 bg-yellow-900/70 -rotate-6"></div>
           <div className="absolute top-[350px] left-[40px] w-12 h-12 bg-green-700/80 rounded-full -rotate-12"></div>
           <div className="absolute bottom-[80px] right-[70px] w-3 h-20 bg-yellow-900/70 rotate-3"></div>
           <div className="absolute top-[380px] right-[65px] w-10 h-10 bg-green-700/80 rounded-full rotate-3"></div>
        </div>
      )}
       {level === 7 && (
        <div className="absolute inset-0 z-[-1] bg-gradient-to-b from-gray-900 via-indigo-900 to-black">
           {/* Fog / Mist */}
           <div className="absolute top-0 left-0 w-full h-full bg-black/30 blur-xl animate-pulse"></div>
           <div className="absolute font-black text-9xl text-purple-400/10" style={{top: '150px', left: '50%', transform: 'translateX(-50%) rotate(5deg)'}}>KLJUČ</div>
        </div>
      )}


      {/* Finish Zone (Sidewalk) */}
      <div className={`absolute top-0 w-full h-20 z-0 ${getSidewalkColor()}`}>
        {renderGoal()}
      </div>

      {/* Road Markings */}
      {CAR_LANES_Y.map(y => (
        <div key={y} className="absolute w-full" style={{ top: y + 45 }}>
          <div className="w-full h-1 border-b-4 border-dashed border-gray-500 opacity-60"></div>
        </div>
      ))}

      {/* Start Zone (Sidewalk) */}
      <div className={`absolute bottom-0 w-full h-20 z-0 ${getSidewalkColor()}`}></div>
      
      <Player position={playerPosition} />
      
      {cars.map(car => (
        <Car key={car.id} data={car} />
      ))}
    </div>
  );
};

export default GameBoard;
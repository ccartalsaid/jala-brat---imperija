import React from 'react';
import { StoryContent } from '../types';

interface StoryModalProps {
  story: StoryContent;
  onContinue: () => void;
}

const StoryModal: React.FC<StoryModalProps> = ({ story, onContinue }) => {
  const renderIcon = () => {
      switch(story.icon) {
          case 'lambo': return <span className="text-6xl" role="img" aria-label="car">🏎️</span>;
          case 'broken-car': return <span className="text-6xl" role="img" aria-label="collision">💥</span>;
          case 'mic': return <span className="text-6xl" role="img" aria-label="microphone">🎤</span>;
          case 'knife': return <span className="text-6xl" role="img" aria-label="knife">🔪</span>;
          case 'tombstone': return <span className="text-6xl" role="img" aria-label="tombstone">⚰️</span>;
          case 'vuco': return <span className="text-6xl" role="img" aria-label="wine glass">🍷</span>;
          case 'hookah': return <span className="text-6xl" role="img" aria-label="hookah smoke">💨</span>;
          default: return null;
      }
  };

  return (
    <div className="absolute inset-0 bg-black bg-opacity-85 flex flex-col items-center justify-center z-50 p-4 transition-opacity duration-300">
      <div className="text-center p-8 rounded-lg shadow-xl bg-gray-900 border-2 border-yellow-400 max-w-lg w-full transform scale-100 animate-fade-in-up">
        <h2 className="text-4xl font-bold mb-4 text-yellow-400" style={{fontFamily: `'Impact', 'Arial Black', sans-serif`}}>
          {story.title}
        </h2>
        <div className="my-6">
          {renderIcon()}
        </div>
        <p className="text-xl text-gray-200 mb-8 leading-relaxed">
          {story.text}
        </p>
        <button
          onClick={onContinue}
          className="px-10 py-4 bg-yellow-500 text-black font-bold text-lg rounded-md hover:bg-yellow-400 transform hover:scale-105 transition-all duration-200 shadow-lg"
        >
          ZAPOČNI
        </button>
      </div>
      <style>{`
        @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(20px) scale(0.95); }
            to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fade-in-up {
            animation: fade-in-up 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default StoryModal;
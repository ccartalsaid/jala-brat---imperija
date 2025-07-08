import React from 'react';
import { GameState } from '../types';

interface GameOverModalProps {
  gameState: GameState;
  level: number;
  onModalAction: () => void;
}

const GameOverModal: React.FC<GameOverModalProps> = ({ gameState, level, onModalAction }) => {
  const isWin = gameState === GameState.Won;

  let title = '';
  let subtitle = '';
  let buttonText = '';

  if (isWin) {
    switch (level) {
      case 1:
        title = 'DOBAR POSAO!';
        subtitle = 'Stigao si do Lamba! Idemo za Sarajevo!';
        buttonText = 'IDEMO ZA SARAJEVO';
        break;
      case 2:
        title = 'VRATIO SI GA!';
        subtitle = 'Pronašao si auto! Vrijeme je da se osvetiš u studiju.';
        buttonText = 'U STUDIO (IMPERIJA)';
        break;
      case 3:
        title = 'HIT UKRADEN!';
        subtitle = 'Grše i Peki su ti uzeli pjesmu! Vrijeme je za osvetu.';
        buttonText = 'PO OSVETU';
        break;
      case 4:
        title = 'OSVETA JE IZVRŠENA';
        subtitle = 'Kao Jala Mačeta, vrijeme je da odaš posljednju počast.';
        buttonText = 'NA SAHRANU';
        break;
      case 5:
        title = 'LEGENDA NA SAHRANI';
        subtitle = 'Na sahrani si upoznao legendu... Siniša Vuco! Čeka te u Splitu.';
        buttonText = 'IDEMO ZA SPLIT';
        break;
      case 6:
        title = 'IZDAJA!';
        subtitle = 'Vuco ti je oteo ženu i pobjegao u Venecuelu. Ostao si bez ičega.';
        buttonText = 'U KLJUČ... NA KRAJ PUTA';
        break;
      case 7:
        title = 'KRAJ PRIČE';
        subtitle = 'Stigao si do nargile. Ugušio si se od dima. Počivaj u miru.';
        buttonText = 'IGRAJ OPET';
        break;
    }
  } else { // Lost
    title = 'GAME OVER';
    subtitle = 'Ja ko vandal sam na vukove ko kangal';
    buttonText = 'POKUŠAJ PONOVO';
  }


  return (
    <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center z-50 transition-opacity duration-300">
      <div className="text-center p-8 rounded-lg shadow-xl bg-gray-800 border-2 border-yellow-400 transform scale-100 animate-fade-in-up">
        <h2 className={`text-5xl font-bold mb-2 ${isWin ? 'text-yellow-400' : 'text-red-500'}`} style={{fontFamily: `'Impact', 'Arial Black', sans-serif`}}>
          {title}
        </h2>
        <p className="text-xl text-gray-200 mb-6">{subtitle}</p>
        <button
          onClick={onModalAction}
          className="px-8 py-3 bg-yellow-500 text-black font-bold text-lg rounded-md hover:bg-yellow-400 transform hover:scale-105 transition-all duration-200 shadow-lg"
        >
          {buttonText}
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

export default GameOverModal;
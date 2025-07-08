import React, { useState, useEffect, useCallback, useRef } from 'react';
import { GameState, CarData, Position, StoryContent } from './types';
import {
  GAME_WIDTH,
  GAME_HEIGHT,
  PLAYER_WIDTH,
  PLAYER_HEIGHT,
  PLAYER_START_POS,
  CAR_LANES_Y,
  CAR_WIDTH,
  CAR_HEIGHT,
} from './constants';
import GameBoard from './components/GameBoard';
import GameOverModal from './components/GameOverModal';
import StoryModal from './components/StoryModal';

const stories: { [key: number]: StoryContent } = {
    1: {
        title: "NIVO 1: ŽELJA",
        text: "Jala Brat opušteno lista Instagram i ugleda najnoviji Lamborghini. Oči mu zasijaju. 'Moram ga imati!', pomisli. Ali, salon je preko opasne ceste...",
        icon: 'lambo'
    },
    2: {
        title: "NIVO 2: PREOKRET U SARAJEVU",
        text: "Kruzira Jala Sarajevom u svom novom Lambu, kad odjednom... pljačka! Auto je nestao! 'Nema šanse! Vratit ću ga, makar morao preći preko minskog polja automobila!'",
        icon: 'broken-car'
    },
    3: {
        title: "NIVO 3: IMPERIJA UZVRAĆA UDARAC",
        text: "Lambo je vraćen, ali bijes ključa. Vrijeme je za osvetu kroz muziku. 'E sad će da vide... Idem u Imperija studio da snimim hit koji će ih oduvati!'",
        icon: 'mic'
    },
    4: {
        title: "NIVO 4: IZDAJA",
        text: "Taman kad je pomislio da je Imperija sigurna, Grše i Peki mu kradu hit ispred nosa! 'Gotovi su!', reče Jala. Vrijeme je za osvetu, a za to mu treba... alat.",
        icon: 'knife'
    },
    5: {
        title: "NIVO 5: POČIVAJTE U MIRU",
        text: "Osveta je izvršena. Grše i Peki su stvar prošlosti. Sada, kao Jala Mačeta, ideš da im odaš 'posljednju počast' na sahrani.",
        icon: 'tombstone'
    },
    6: {
        title: "NIVO 6: LEGENDE SE SPAJAJU",
        text: "Na sahrani upoznaješ legendu - Sinišu Vucu. Dogovor pada: idete snimiti duet koji će srušiti Balkan. Pravac Split!",
        icon: 'vuco'
    },
    7: {
        title: "NIVO 7: KRAJ PUTA",
        text: "Vuco ti je oteo ženu i odveo je u Venecuelu. Slomljen, vraćaš se u rodni Ključ. Jedina utjeha ti je nargila s druge strane ceste...",
        icon: 'hookah'
    }
};


const createInitialCars = (level: number): CarData[] => {
  const cars: CarData[] = [];
  let idCounter = 0;
  let speedMultiplier = 1;
  let secondCarProbability = 0.4;

  if (level === 2) {
    speedMultiplier = 1.4;
    secondCarProbability = 0.75;
  } else if (level === 3) {
    speedMultiplier = 1.8;
    secondCarProbability = 0.9;
  } else if (level === 4) {
    speedMultiplier = 2.2;
    secondCarProbability = 0.95;
  } else if (level === 5) {
    speedMultiplier = 2.6;
    secondCarProbability = 1.0;
  } else if (level === 6) {
    speedMultiplier = 3;
    secondCarProbability = 1.0;
  } else if (level === 7) {
    speedMultiplier = 4.5; // Ultra impossible speed
    secondCarProbability = 1.0;
  }

  CAR_LANES_Y.forEach((laneY, index) => {
    const direction = index % 2 === 0 ? 1 : -1; // 1 for right, -1 for left
    const speed = (Math.random() * 2 + 1.5) * speedMultiplier * direction;
    const initialX = direction === 1 ? -CAR_WIDTH - Math.random() * 300 : GAME_WIDTH + Math.random() * 300;
    
    cars.push({
      id: idCounter++,
      position: { x: initialX, y: laneY },
      speed: speed,
      direction: direction,
    });
    
    if (Math.random() < secondCarProbability) {
      const secondCarX = initialX + (direction * (GAME_WIDTH / 2.5 + Math.random() * 100));
       cars.push({
        id: idCounter++,
        position: { x: secondCarX, y: laneY },
        speed: speed,
        direction: direction,
      });
    }
    // Add third car for level 7
    if (level === 7) {
        const thirdCarX = initialX + (direction * (GAME_WIDTH / 1.5 + Math.random() * 100));
         cars.push({
            id: idCounter++,
            position: { x: thirdCarX, y: laneY },
            speed: speed * (Math.random() * 0.5 + 0.8), // Vary speed slightly
            direction: direction,
        });
    }
  });
  return cars;
};


const App: React.FC = () => {
  const [level, setLevel] = useState(1);
  const [gameState, setGameState] = useState<GameState>(GameState.Story);
  const [playerPosition, setPlayerPosition] = useState<Position>(PLAYER_START_POS);
  const [cars, setCars] = useState<CarData[]>(() => createInitialCars(level));
  const [storyContent, setStoryContent] = useState<StoryContent>(stories[1]);
  const [isTeleportReady, setIsTeleportReady] = useState(true);
  const gameLoopRef = useRef<number | null>(null);
  const teleportCooldownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setStoryContent(stories[level]);
  }, [level]);

  const resetTeleport = useCallback(() => {
    if (teleportCooldownTimer.current) {
        clearTimeout(teleportCooldownTimer.current);
    }
    setIsTeleportReady(true);
  }, []);

  const handleStartLevel = () => {
    setGameState(GameState.Playing);
  };

  const startNextLevel = useCallback(() => {
    const nextLevel = level + 1;
    setLevel(nextLevel);
    setPlayerPosition(PLAYER_START_POS);
    setCars(createInitialCars(nextLevel));
    resetTeleport();
    setGameState(GameState.Story);
  }, [level, resetTeleport]);

  const resetCurrentLevel = useCallback(() => {
    setPlayerPosition(PLAYER_START_POS);
    setCars(createInitialCars(level));
    resetTeleport();
    setGameState(GameState.Playing);
  }, [level, resetTeleport]);

  const resetGameToStart = useCallback(() => {
    setLevel(1);
    setPlayerPosition(PLAYER_START_POS);
    setCars(createInitialCars(1));
    resetTeleport();
    setGameState(GameState.Story);
  }, [resetTeleport]);

  const handleModalAction = useCallback(() => {
    if (gameState === GameState.Won) {
        if (level < 7) {
            startNextLevel();
        } else { // Won level 7
            resetGameToStart();
        }
    } else { // Lost
        resetCurrentLevel();
    }
  }, [gameState, level, startNextLevel, resetCurrentLevel, resetGameToStart]);


  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (gameState !== GameState.Playing) return;

    if (e.key === ' ' || e.code === 'Space') {
      e.preventDefault();
      if (isTeleportReady) {
        setPlayerPosition(prevPos => ({ ...prevPos, y: 30 }));
        setIsTeleportReady(false);
        teleportCooldownTimer.current = setTimeout(() => {
          setIsTeleportReady(true);
        }, 5000); // 5 second cooldown
      }
      return;
    }

    setPlayerPosition(prevPos => {
      let newX = prevPos.x;
      let newY = prevPos.y;
      const step = 20;

      switch (e.key) {
        case 'ArrowUp':
        case 'w':
          newY -= step;
          break;
        case 'ArrowDown':
        case 's':
          newY += step;
          break;
        case 'ArrowLeft':
        case 'a':
          newX -= step;
          break;
        case 'ArrowRight':
        case 'd':
          newX += step;
          break;
        default:
          return prevPos;
      }

      // boundary checks
      newX = Math.max(0, Math.min(GAME_WIDTH - PLAYER_WIDTH, newX));
      newY = Math.max(0, Math.min(GAME_HEIGHT - PLAYER_HEIGHT, newY));
      
      return { x: newX, y: newY };
    });
  }, [gameState, isTeleportReady]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (teleportCooldownTimer.current) {
        clearTimeout(teleportCooldownTimer.current);
      }
    };
  }, [handleKeyDown]);
  
  const gameLoop = useCallback(() => {
    if (gameState !== GameState.Playing) return;

    // Move cars
    setCars(prevCars => 
      prevCars.map(car => {
        let newX = car.position.x + car.speed;
        if (car.direction === 1 && newX > GAME_WIDTH) {
          newX = -CAR_WIDTH - Math.random() * 200;
        } else if (car.direction === -1 && newX < -CAR_WIDTH) {
          newX = GAME_WIDTH + Math.random() * 200;
        }
        return { ...car, position: { ...car.position, x: newX } };
      })
    );

    // Check for win
    if (playerPosition.y <= 20) {
      setGameState(GameState.Won);
      return;
    }

    // Check for collisions
    for (const car of cars) {
      if (
        playerPosition.x < car.position.x + CAR_WIDTH &&
        playerPosition.x + PLAYER_WIDTH > car.position.x &&
        playerPosition.y < car.position.y + CAR_HEIGHT &&
        playerPosition.y + PLAYER_HEIGHT > car.position.y
      ) {
        setGameState(GameState.Lost);
        return;
      }
    }

    gameLoopRef.current = requestAnimationFrame(gameLoop);
  }, [gameState, playerPosition, cars]);

  useEffect(() => {
    if (gameState === GameState.Playing) {
        gameLoopRef.current = requestAnimationFrame(gameLoop);
    }
    return () => {
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current);
      }
    };
  }, [gameState, gameLoop]);


  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-sans p-4">
      <div className="text-center mb-2">
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 tracking-wider" style={{fontFamily: `'Impact', 'Arial Black', sans-serif`}}>
          {level < 5 ? 'JALA BRAT' : 'JALA MAČETA'}
        </h1>
        <p className="text-yellow-400 font-bold text-xl mt-1">NIVO {level}</p>
      </div>
       <div className="text-center mb-4 h-6">
        <div className={`font-bold text-lg transition-colors duration-300 ${isTeleportReady ? 'text-cyan-400' : 'text-gray-500'}`}>
            TELEPORT (SPACE): {isTeleportReady ? 'SPREMAN' : 'PUNIM...'}
        </div>
      </div>
      
      <GameBoard playerPosition={playerPosition} cars={cars} level={level} />

      {gameState === GameState.Story && (
        <StoryModal story={storyContent} onContinue={handleStartLevel} />
      )}

      {(gameState === GameState.Won || gameState === GameState.Lost) && (
        <GameOverModal gameState={gameState} level={level} onModalAction={handleModalAction} />
      )}
    </div>
  );
};

export default App;
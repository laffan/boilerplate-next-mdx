import { useState, useEffect } from "react";
import { Game } from "phaser";

export function useGame(config, containerRef) {
  
  const [game, setGame] = useState();
  useEffect(() => {
    if (!game && containerRef.current) {
      const newGame = new Game({ ...config, parent });
      setGame(newGame);
    }
    return () => {
      game?.destroy(true);
    };
  }, [config, containerRef, game]);

  return game;
}

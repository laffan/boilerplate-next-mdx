import { Types } from "phaser";
import { BootScene } from "./scenes";

const gameConfig: Types.Core.GameConfig = {
  parent: "myGame",
  type: Phaser.AUTO,
  backgroundColor: "#125555",

  height: 100,
  width: 960,
  scale: {
    // autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
      gravity: {
        x: 0,
        y: 0,
      },
    },
  },
  scene: BootScene,
};

export default gameConfig;

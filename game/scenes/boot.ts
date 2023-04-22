import { Scene, GameObjects } from "phaser";

import { SCENES, PROGRESS_BAR, PROGRESS_BG } from "../constants";
import { LoadScene } from "./load";
import { MainScene } from "./main";

export class BootScene extends Scene {
  preload() {

  }

  init() {
    this.scale.on("resize", this.resize, this);
  }

  create() {
    // TODO: Configure scaling

    this.scene.add(SCENES.LOAD, LoadScene, false);
    this.scene.add(SCENES.MAIN, MainScene, false);

    this.scene.start(SCENES.LOAD);
  }

  resize(gameSize: GameObjects.Components.Size) {
    this.cameras.resize(gameSize.width, gameSize.height);
  }
}

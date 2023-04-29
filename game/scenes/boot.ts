import { Scene, Cameras, GameObjects } from "phaser";

import { LoadScene } from "./load";
import { MainScene } from "./main";

export class BootScene extends Scene {
  private camera!: Cameras.Scene2D.Camera;

  debounce(func, wait) {
    let timeout;
    return function (...args) {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait);
    };
  }

  preload() {
    this.scale.resize(window.innerWidth, window.innerHeight);
  }

  init() {
    const debouncedResizeGame = this.debounce(() => {
      this.scale.resize(window.innerWidth, window.innerHeight);
    }, 100);
    window.addEventListener("resize", debouncedResizeGame);

    this.camera = this.cameras.main;
    this.camera.setBackgroundColor("#24252A");
  }

  create() {
    this.scene.add("LoadScene", LoadScene, false);
    this.scene.add("MainScene", MainScene, false);
    this.scene.start("LoadScene");
  }
}

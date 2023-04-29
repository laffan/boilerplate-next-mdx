import { Scene } from "phaser";
import { WebFontFile } from "../loaders";

export class LoadScene extends Scene {
  private progressBar!: Phaser.GameObjects.Sprite;

  preload() {
    console.log("LoadScene");
    const { centerX, centerY } = this.cameras.main;
    const { width, height } = this.game.config;
    let loadingBar = this.add.graphics();

    this.load.on("progress", (value) => {
      loadingBar.clear(); // reset fill/line style
      loadingBar.fillStyle(0xffffff, 1); // (color, alpha)
      loadingBar.fillRect(0, centerY, value, 5); // (x, y, w, h)
    });
    
    this.load.on("complete", () => {
      loadingBar.destroy();
    this.scene.start("MainScene");

    });

    /**
     * Load fonts
     */
    this.load.addFile(new WebFontFile(this.load, "Rancho"));
  }
}

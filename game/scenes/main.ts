import { Scene, GameObjects, Cameras } from "phaser";

export class MainScene extends Scene {
  private helloLabel!: GameObjects.Text;
  private testImg!: GameObjects.Image;
  private camera!: Cameras.Scene2D.Camera;
  init() {
    this.camera = this.cameras.main;
    this.camera.setBackgroundColor("#24252A");
  }

  preload() {
    this.load.setBaseURL("/assets/game/img");
    this.load.image("test", "test-image.png");
  }

  create() {
    const { centerX, centerY } = this.camera;
    this.helloLabel = this.add
      .text(centerX, centerY, "Hello World", {
        fontFamily: "Rancho",
        fontSize: 80,
      })
      .setShadow(5, 5, "#5588EE", 0, true, true)
      .setOrigin(0.5, 0.5);

    this.testImg = this.add.image(400, 300, 'test').setScale(.5);

  }

  update() {
    this.helloLabel.angle += 1;
    this.testImg.angle += 1;
  }
}

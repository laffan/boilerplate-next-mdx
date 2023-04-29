import { Scene, GameObjects } from "phaser";

export class MainScene extends Scene {
  
  private helloLabel!: GameObjects.Text;
  private testImg!: GameObjects.Image;

  preload() {
    console.log("MainScene")
    this.load.setBaseURL("/assets/game/img");
    this.load.image("test", "test-image.png");
  }

  create() {
    const { centerX, centerY } = this.cameras.main;
    const { width, height } = this.game.config;
    var rect = this.add.rectangle(300, 50, 300, 400, 0xFFFFFF).setOrigin(0,0);

    this.helloLabel = this.add
      .text(150, 150, "Hello World", {
        fontFamily: "Rancho",
        fontSize: 30,
      })
      .setShadow(5, 5, "#5588EE", 0, true, true)
      .setOrigin(0.5, 0.5);

    this.testImg = this.add.image(150, 300, 'test').setScale(.5);

  }

  update() {
    this.helloLabel.angle += 1;
    this.testImg.angle += 1;
  }
}

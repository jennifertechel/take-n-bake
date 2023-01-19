type Scene = "play" | "menu" | "loss" | "win";

interface IScene {
  setActiveScene(scene: Scene): void;
}

class Game implements IScene {
    private gameMenu: GameMenu
    private winnerScene: WinnerScene;
    private looserScene: LooserScene;
    private activeScene: Scene;
    private time: number;

    constructor() {
      this.gameMenu = new GameMenu(this);
      this.winnerScene = new WinnerScene();
      this.looserScene = new LooserScene(this);
      this.activeScene = "menu";
      this.time = 0;
    }

    public update() {
      this.time += deltaTime;
      if (this.time > 1000) {
       // skapa en ny ingrediens
        this.time = 0;
      }

      if (this.activeScene === "menu") {
        this.gameMenu.update();
      } else if (this.activeScene === "play") {
        this.gameMenu.update(); // todo ändra. 
      }
    }

    public draw() {

      this.gameMenu.draw();
    }

    public setActiveScene(scene: Scene) {
      this.activeScene = scene;
      // todo: gör fler saker om det behövs...
    }
}
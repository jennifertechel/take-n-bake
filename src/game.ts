type Scene = "startScene" | "menuScene" | "recipeScene" | "levelScene" | "winnerScene" | "looserScene" ;

interface IScene {
  setActiveScene(scene: Scene): void;
}

class Game implements IScene {
    private gameMenu: GameMenu
    private startScene: StartScene;
    private menuScene: MenuScene;
    private recipeScene: RecipeScene;
    private levelScene: LevelScene;
    private looserScene: LooserScene;
    private winnerScene: WinnerScene;
    private activeScene: Scene;
    private time: number;

    constructor() {
      this.gameMenu = new GameMenu(this);
      this.winnerScene = new WinnerScene();
      this.looserScene = new LooserScene(this);
      this.activeScene = "startScene";
      this.time = 0;
    }

    public update() {
      this.time += deltaTime;
      if (this.time > 1000) {
       // skapa en ny ingrediens
        this.time = 0;
      }

      if (this.activeScene === "startScene") {
        this.gameMenu.update();
      } else if (this.activeScene === "menuScene") {
        this.gameMenu.update(); // todo ändra. 
      } else if (this.activeScene === "recipeScene") {
        this.recipeScene.update(); // todo ändra. 
      } else if (this.activeScene === "levelScene") {
        this.gameMenu.update(); // todo ändra. 
      } else if (this.activeScene === "winnerScene") {
        this.gameMenu.update(); // todo ändra. 
      } else if (this.activeScene === "looserScene") {
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
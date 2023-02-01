type Scene = "startScene" | "menuScene" | "recipeScene" | "levelScene" | "winnerScene" | "looserScene" ;

interface IScene {
  setActiveScene(scene: Scene): void;
}
interface ILevel {
  getCurrentLevel(): number;
  nextLevel(): number;
}

class Game implements IScene, ILevel {
    private startScene: StartScene;
    private menuScene: MenuScene;
    private recipeScene: RecipeScene;
    private levelScene: LevelScene;
    private looserScene: LooserScene;
    private winnerScene: WinnerScene;
    private activeScene: Scene;
    private currentLevel: number;

    constructor() {
      this.currentLevel = 1;
      this.startScene = new StartScene(this);
      this.menuScene = new MenuScene(this);
      this.levelScene = new LevelScene(this, this);
      this.recipeScene = new RecipeScene(this, 1, this);
      this.winnerScene = new WinnerScene(this, 1, this);
      this.looserScene = new LooserScene(this);
      this.activeScene = "levelScene";
    }

    public update() {

      if (this.activeScene === "startScene") {
        this.startScene.update();
      } else if (this.activeScene === "menuScene") {
        this.menuScene.update();
      } else if (this.activeScene === "recipeScene") {
        this.recipeScene.update();
      } else if (this.activeScene === "levelScene") {
        this.levelScene.update();
      } else if (this.activeScene === "winnerScene") {
        this.winnerScene.update();
      } else if (this.activeScene === "looserScene") {
        this.looserScene.update();
      }
    }

    public draw() {
      if (this.activeScene === "startScene") {
        this.startScene.draw();
      } else if (this.activeScene === "menuScene") {
        this.menuScene.draw();
      } else if (this.activeScene === "recipeScene") {
        this.recipeScene.draw();
      } else if (this.activeScene === "levelScene") {
        this.levelScene.draw();
      } else if (this.activeScene === "winnerScene") {
        this.winnerScene.draw();
      } else if (this.activeScene === "looserScene") {
        this.looserScene.draw();
      }
    }

    public getCurrentLevel(): number {
      return this.currentLevel;
    }

    public setActiveScene(scene: Scene) {
      this.activeScene = scene;
      // todo: gör fler saker om det behövs...
    }

  public nextLevel(): number {
    this.currentLevel++;
    if (this.currentLevel > 3) {
      this.currentLevel = 3;
    }
    return this.currentLevel;
  }

}
type Scene = "startScene" | "menuScene" | "recipeScene" | "levelScene" | "winnerScene" | "looserScene" | "finalScene";

interface IScene {
  setActiveScene(scene: Scene): void;
}
interface ILevel {
  getCurrentLevel(): number;
  nextLevel(): void;
}

class Game implements IScene, ILevel {
    private startScene: StartScene;
    private menuScene: MenuScene;
    private recipeScene: RecipeScene;
    private levelScene: LevelScene;
    private looserScene: LooserScene;
    private winnerScene: WinnerScene;
    private finalScene: FinalScene;
    private activeScene: Scene;
    private currentLevel: number;

    constructor() {
      this.currentLevel = 0;
      randomSeed(1)
      this.startScene = new StartScene(this);
      this.menuScene = new MenuScene(this);
      this.levelScene = new LevelScene(this, this);
      this.recipeScene = new RecipeScene(this, this);
      this.winnerScene = new WinnerScene(this.levelScene, this);
      this.looserScene = new LooserScene(this);
      this.finalScene = new FinalScene();
      this.activeScene = "startScene";
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
      } else if (this.activeScene === "finalScene") {
        this.finalScene.update();
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
      } else if (this.activeScene === "finalScene") {
        this.finalScene.draw();
      }
    }

    public getCurrentLevel(): number {
      return this.currentLevel;
    }

    public setActiveScene(scene: Scene) {
      this.activeScene = scene;
      if (scene === "levelScene") {
        this.levelScene = new LevelScene(this, this)
        this.winnerScene = new WinnerScene(this.levelScene, this);
      } else if (scene === "recipeScene") {
        this.nextLevel();
      }
    }

  public nextLevel() {
    this.currentLevel++;
    randomSeed(this.currentLevel + 5)
    if (this.currentLevel > 3) {
      this.currentLevel = 1;
    }
  }
}
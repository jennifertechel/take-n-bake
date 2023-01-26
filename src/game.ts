type Scene = "startScene" | "menuScene" | "recipeScene" | "levelScene" | "winnerScene" | "looserScene" ;

interface IScene {
  setActiveScene(scene: Scene): void;
}

class Game implements IScene {
    private startScene: StartScene;
    private menuScene: MenuScene;
    private recipeScene: RecipeScene;
    private levelScene: LevelScene;
    private looserScene: LooserScene;
    private winnerScene: WinnerScene;
    private activeScene: Scene;

    constructor() {
      this.startScene = new StartScene(this);
      this.menuScene = new MenuScene(this);
      this.recipeScene = new RecipeScene(this);
      this.levelScene = new LevelScene(this);
      this.winnerScene = new WinnerScene(this, 1);
      this.looserScene = new LooserScene(this);
<<<<<<<<< Temporary merge branch 1
      this.activeScene = "levelScene";
=========
      this.activeScene = "startScene";
>>>>>>>>> Temporary merge branch 2
      this.time = 0;
      // this.timer = new Time();
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
      // this.menuScene.draw();
      // this.winnerScene.draw();
      // this.looserScene.draw();
      //this.levelScene.draw();
      // this.startScene.draw();

      //   player.handleInput();
        //player.draw();
      if (this.activeScene === "startScene") {
        this.startScene.draw();
      } else if (this.activeScene === "menuScene") {
        this.menuScene.draw();
      } else if (this.activeScene === "recipeScene") {
        this.recipeScene.draw(); // todo ändra. 
      } else if (this.activeScene === "levelScene") {
        this.levelScene.draw();
      } else if (this.activeScene === "winnerScene") {
        this.winnerScene.draw();
      } else if (this.activeScene === "looserScene") {
        this.looserScene.draw();
      }
    }

    public setActiveScene(scene: Scene) {
      this.activeScene = scene;
      // todo: gör fler saker om det behövs...
    }
}
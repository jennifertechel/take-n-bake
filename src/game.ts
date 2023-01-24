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
    private time: number;

    //testing code below 
    private recipeFactory: RecipeFactory;
    private ingredients: Ingredients[] = [];

    constructor() {
      this.startScene = new StartScene(this);
      this.menuScene = new MenuScene(this);
      this.recipeScene = new RecipeScene();
      this.levelScene = new LevelScene(this);
      // let time = Time.getTime();
      // Bör ändras till ett ice-statiskt värde
      // this.winnerScene = new WinnerScene(this, time);
      this.winnerScene = new WinnerScene(this, 1);
      this.looserScene = new LooserScene(this);
      this.activeScene = "startScene";
      this.time = 0;

      //testing code below 
      this.recipeFactory = new RecipeFactory();
      this.ingredients = [];
    }

    public update() {

      this.time += deltaTime;
      if (this.time > 1000) {
       // skapa en ny ingrediens
        this.ingredients.push(this.recipeFactory.getIngredient("strawberry")); // or any other ingredient you want to create
        this.ingredients.push(this.recipeFactory.getIngredient("flour"));
        
        this.time = 0;
      }

      if (this.activeScene === "startScene") {
        this.startScene.update();
      } else if (this.activeScene === "menuScene") {
        this.menuScene.update();
      } else if (this.activeScene === "recipeScene") {
        //this.recipeScene.update(); // todo ändra. 
      } else if (this.activeScene === "levelScene") {
        this.levelScene.update();
        player.update();
        // fall all the ingredients
        for (let ingredient of this.ingredients) {
          ingredient.fall();
        }
      } else if (this.activeScene === "winnerScene") {
        this.winnerScene.update();
      } else if (this.activeScene === "looserScene") {
        this.looserScene.update();
      }
    }

    public draw() {
      this.menuScene.draw();
      // this.winnerScene.draw();
      // this.looserScene.draw();
      //this.levelScene.draw();
      this.startScene.draw();

        player.handleInput();
        //player.draw();
      if (this.activeScene === "startScene") {
        // this.startScene.draw(); // todo ändra
      } else if (this.activeScene === "menuScene") {
        this.menuScene.draw();
      } else if (this.activeScene === "recipeScene") {
        //this.recipeScene.draw(); // todo ändra. 
      } else if (this.activeScene === "levelScene") {
        this.levelScene.draw();
        player.handleInput();
        player.update();
        player.draw();
        // draw all the ingredients
        for (let ingredient of this.ingredients) {
          ingredient.draw();
        }
        

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
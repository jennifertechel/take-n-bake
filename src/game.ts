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
    private ingredientTypes: Ingredient[] = ["apple", "banana", "blueberry", "butter", "cherry", "chocolate", "egg", "flour", "milk", "strawberry", "sugar"];


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
      this.activeScene = "levelScene";
      this.time = 0;

      //testing code below 
      this.recipeFactory = new RecipeFactory();
      this.ingredients = [];
      this.ingredientTypes = ["apple", "banana", "blueberry", "butter", "cherry", "chocolate", "egg", "flour", "milk", "strawberry", "sugar"];
      // this.timer = new Time();
    }

    public update() {
      // this.timer.update();


      this.time += deltaTime;
      if (this.time > 1000) {
       // skapa en ny ingrediens
          const randomIngredient = this.ingredientTypes[Math.floor(Math.random()*this.ingredientTypes.length)];
          const ingredient = this.recipeFactory.getIngredient(randomIngredient);
          //ingredient.randomizeIngredient();
          ingredient.randomizeStartPosition();
          ingredient.randomizeVelocity();
          this.ingredients.push(ingredient);


        //const randomIndex = Math.floor(Math.random()* this.ingredientTypes.length)
        //const randomIngredient = this.ingredientTypes[randomIndex];
        //const ingredient = this.recipeFactory.getIngredient(randomIngredient);
        //ingredient.randomizeStartPosition();
        //ingredient.randomizeVelocity();
        //this.ingredients.push(ingredient);
        
        this.time = 0;
      }

      if (this.activeScene === "startScene") {
        this.startScene.update();
      } else if (this.activeScene === "menuScene") {
        this.menuScene.update();
      } else if (this.activeScene === "recipeScene") {
        this.recipeScene.update();
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
      if (this.activeScene === "startScene") {
        this.startScene.draw();
      } else if (this.activeScene === "menuScene") {
        this.menuScene.draw();
      } else if (this.activeScene === "recipeScene") {
        this.recipeScene.draw();
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
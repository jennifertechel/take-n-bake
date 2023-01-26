/// <reference path="player.ts" />
/// <reference path="recipeFactory.ts" />

class LevelScene extends Player {
    private tableCloth: p5.Image;
    private recipeTitle: string;
    private recipe: string;
    private recipeFactory: RecipeFactory;
    private recipeBackground: p5.Vector;
    private game: IScene;
    private timer: Time;

    private time: number;
    private ingredients: Ingredients[] = [];
    private ingredientTypes: Ingredient[] = ["apple", "banana", "blueberry", "butter", "cherry", "chocolate", "egg", "flour", "milk", "strawberry", "sugar"];
    private lastIngredient: Ingredient | undefined;

    constructor(game: IScene) {
        super(images.playerBowl, createVector(width * 0.5, height * .75), createVector(220, 220), createVector(0, 0));
        this.tableCloth = images.backgroundObjects.tableCloth;
        this.recipeTitle = "Pancakes"
        this.recipe = "1 sugar \n4 eggs \n3 milk";
        this.recipeFactory = new RecipeFactory();
        this.recipeBackground = createVector((innerWidth/4-225), 580, 50);
        this.timer = new Time();
        this.game = game;
        this.time = 0;
        this.ingredients = [];
        this.ingredientTypes = ["apple", "banana", "blueberry", "butter", "cherry", "chocolate", "egg", "flour", "milk", "strawberry", "sugar"];
        this.lastIngredient = undefined;
    }

    public drawRecipe(recipe: Recipe) {
        textSize(20);
        let currentRecipe = this.recipeFactory.getRecipe(1); // 1 är nivånummer
        this.drawRecipe(currentRecipe);
    }

    public createIngredient() {
        let randomIngredient = this.ingredientTypes[Math.floor(Math.random()*this.ingredientTypes.length)];
        while (randomIngredient === this.lastIngredient) {
            randomIngredient = this.ingredientTypes[Math.floor(Math.random()*this.ingredientTypes.length)];
        }
        this.lastIngredient = randomIngredient;
        const ingredient = this.recipeFactory.getIngredient(randomIngredient);
        ingredient.randomizeStartPosition();
        ingredient.randomizeVelocity();
        this.ingredients.push(ingredient);
    }
    

    public update() {
        this.timer.update();
        this.time += deltaTime;
        if (this.time > 1500) {
            this.createIngredient();
            this.time = 0;
        }
        for (let ingredient of this.ingredients) {
            ingredient.fall();
          }
    }
    
    public draw() {

        noCursor();

        // Recipe background
        this.recipeBackground
        strokeWeight(20);
        stroke("#C6E3DE")
        fill("#F5F5F5");
        rect(30, 30, 220, 362);

        // Recipe text
        textSize(26);
        fill("#808080");
        textAlign(LEFT, TOP);
        noStroke()
        let recipe = this.recipeFactory.getRecipe(2);
        let yPos = 130; // start position for first line of text
        
        for(let i = 0; i < recipe.getIngredients().length; i++) {
            text(recipe.getIngredients()[i].amount + " " + recipe.getIngredients()[i].name, 60, yPos+i*40);
        }

        // Recipe title
        textStyle(BOLD);
        text(recipe.getName(), 60, 70);

        // Timer
        text(this.timer.getTime(), windowWidth -120, 20);

        // Tablecloth
        image(this.tableCloth, 0, innerHeight-180, innerWidth, 180);

        // Draw all the ingredients
        for (let ingredient of this.ingredients) {
            ingredient.draw();
        }
    }
}

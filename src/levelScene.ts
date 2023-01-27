/// <reference path="player.ts" />
/// <reference path="recipeFactory.ts" />

class LevelScene extends Player {
    private tableCloth: p5.Image;
    private recipeFactory: RecipeFactory;
    private currentRecipe: Recipe;
    private recipeBackground: p5.Vector;
    private game: IScene;
    private timer: Time;
    private time: number;
    private ingredients: Ingredients[] = [];
    private ingredientTypes: Ingredient[] = ["apple", "banana", "blueberry", "butter", "cherry", "chocolate", "egg", "flour", "milk", "strawberry", "sugar"];
    private player: Player;    
    private lastIngredient: Ingredient | undefined;
    private originalRecipe: Recipe;

    constructor(game: IScene) {
        super(images.playerBowl, createVector(width * 0.5, height * .75), createVector(220, 220), createVector(0, 0));
        this.tableCloth = images.backgroundObjects.tableCloth;
        this.recipeFactory = new RecipeFactory();
        this.currentRecipe = this.recipeFactory.getRecipe(2);
        this.recipeBackground = createVector((innerWidth/4-225), 580, 50);
        this.timer = new Time();
        this.game = game;
        this.time = 0;
        this.ingredients = [];
        this.ingredientTypes = ["apple", "banana", "blueberry", "butter", "cherry", "chocolate", "egg", "flour", "milk", "strawberry", "sugar"];
        this.player = new Player(images.playerBowl, createVector(width * 0.5-110, height * .70), createVector(220, 200), createVector(0, 0));
        this.lastIngredient = undefined;
        this.originalRecipe = this.recipeFactory.getRecipe(2);
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
        
        this.handleCaughtIngredients();
        this.player.update();
    }

    private resetGame(): void {
        this.currentRecipe = this.recipeFactory.getRecipe(2);
        this.timer.reset();
        this.ingredients = [];
        console.log("reset")
    }
    
    public draw() {
        noCursor();

        // Recipe background
        this.recipeBackground
        strokeWeight(20);
        stroke("#C6E3DE")
        fill("#F5F5F5");
        rect(30, 30, 220, 362);
        
        // Timer
        noStroke();
        fill("#808080")
        text(this.timer.getTime(), windowWidth -120, 20);

        // Tablecloth
        image(this.tableCloth, 0, innerHeight-180, innerWidth, 180);

        // Draw all the ingredients
        for (let ingredient of this.ingredients) {
            ingredient.draw();
        }

        this.player.handleInput();
        this.player.draw();
        this.currentRecipe.draw();
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

    private isIngredientInCurrentRecipe(ingredientName: string): boolean {
        return this.currentRecipe.getIngredients().some(ingredientData => ingredientData.name === ingredientName);
    }

    public handleCaughtIngredients(): boolean {
        for (let ingredient of this.ingredients) {

            if (ingredient.isCollidingWithPlayer(this.player.getPosition(), this.player.getSize())) {
                
                if (this.isIngredientInCurrentRecipe(ingredient.getName())){
                    console.log("Ingredient hit: " + ingredient.getName());
                    // remove the caught ingredient from screen
                    let index = this.ingredients.indexOf(ingredient);
                    this.ingredients.splice(index, 1);
    
                    // remove the caught ingredient from the currentRecipe
                    let ingredientInRecipe = this.currentRecipe.getIngredients().find(i => i.name === ingredient.getName())
                    if(ingredientInRecipe) {
                    // If amount is over 0 decrese amount
                    if(ingredientInRecipe.amount > 0) {
                        ingredientInRecipe.amount -= 1;
                        // Check for win
                        if(ingredientInRecipe.amount === 0) {
                            if(this.currentRecipe.getIngredients().every(i => i.amount === 0)) {
                                this.resetGame();
                                this.game.setActiveScene("winnerScene");
                            }
                        }
                    }
                }
                // draw recipe text
                this.currentRecipe.draw();
                console.log(this.currentRecipe)
                return true
                } else {
                    // Set timer to 0
                    this.resetGame();
                    this.game.setActiveScene("looserScene");
                }
            }
        }
        return false;
    }

    resetCurrentRecipe(){
        this.currentRecipe = this.originalRecipe;
    }
}


/// <reference path="player.ts" />
/// <reference path="recipeFactory.ts" />
/// <reference path="time.ts" />

interface ITime {
    getTime: () => number;
}

class LevelScene implements ITime {
    private tableCloth: p5.Image;
    private recipeFactory: RecipeFactory;
    private recipeBackground: p5.Vector;
    private game: IScene;
    private timer: Time; 
    private time: number;
    private ingredients: Ingredients[] = [];
    private ingredientTypes: Ingredient[] = ["apple", "banana", "blueberry", "butter", "cherry", "chocolate", "egg", "flour", "milk", "strawberry", "sugar"];
    private player: Player;    
    private lastIngredient: Ingredient | undefined;
    private gameLevel: ILevel;
    private currentRecipe: Recipe;

    constructor(game: IScene, gameLevel: ILevel) {
        // super(images.playerBowl, createVector(width * 0.5, height * .75), createVector(220, 220), createVector(0, 0));
        this.tableCloth = images.backgroundObjects.tableCloth;
        this.recipeFactory = new RecipeFactory();
        this.recipeBackground = createVector((innerWidth/4-225), 580, 50);
        this.timer = new Time();
        this.game = game;
        this.time = 0;
        this.ingredients = [];
        this.ingredientTypes = ["apple", "banana", "blueberry", "butter", "cherry", "chocolate", "egg", "flour", "milk", "strawberry", "sugar"];
        this.player = new Player(images.playerBowl, createVector(width * 0.5-110, height * .70), createVector(177, 146), createVector(0, 0));
        this.lastIngredient = undefined;
        this.gameLevel = gameLevel;
        this.currentRecipe = this.recipeFactory.getRecipe(1);
    }

    public update() {
        this.timer.update();
        this.time += deltaTime;
        let level = this.gameLevel.getCurrentLevel();
        let timeBetweenIngredients = 1200;
        switch(level) {
            case 1:
                timeBetweenIngredients = 1200;
                break;
            case 2:
                timeBetweenIngredients = 800;
                break;
            case 3:
                timeBetweenIngredients = 500;
                break;
        } 
        if (this.time > timeBetweenIngredients) {
            this.createIngredient();
            this.time = 1;
        }
        for (let ingredient of this.ingredients) {
            ingredient.fall();
        }
        
        this.handleCaughtIngredients();
        this.player.update();
    }

    private resetGame(): void {
        this.timer.reset();
        this.ingredients = [];
    }

    public getTime() {
        return this.timer.getRealTime();
    }
    
    public draw() {
        noCursor();

        let level = this.gameLevel.getCurrentLevel();
        this.currentRecipe = this.recipeFactory.getRecipe(level);

        // Recipe background
        this.recipeBackground
        strokeWeight(20);
        stroke("#C6E3DE")
        fill("#F5F5F5");
        rect(30, 30, 240, 405);
        
        // Timer
        noStroke();
        fill("#808080")
        text(this.timer.getTime(), windowWidth -120, 20);

        // Tablecloth
        image(this.tableCloth, 0, innerHeight-180, innerWidth, 180);
        
        // Draw all the falling ingredients
        for (let ingredient of this.ingredients) {
            ingredient.draw();
        }
        
        this.player.handleInput();
        this.player.draw();
        this.currentRecipe.draw();
    }

    public createIngredient() {
        let level = this.gameLevel.getCurrentLevel();
        let randomIngredient = this.ingredientTypes[Math.floor(random()*this.ingredientTypes.length)];
        while (randomIngredient === this.lastIngredient) {
            randomIngredient = this.ingredientTypes[Math.floor(random()*this.ingredientTypes.length)];
        }
        this.lastIngredient = randomIngredient;
        const ingredient = this.recipeFactory.getIngredient(randomIngredient);
        ingredient.randomizeStartPosition();
        ingredient.setVelocityForLevels(level);
        this.ingredients.push(ingredient);
    }
    
    private isIngredientInCurrentRecipe(ingredientName: string): boolean {
        return this.currentRecipe.getIngredients().some(ingredientData => ingredientData.name === ingredientName);
    }

    public handleCaughtIngredients(): void {
        for (let ingredient of this.ingredients) {

            if (ingredient.isCollidingWithPlayer(this.player.getPosition(), this.player.getSize())) {
                
                if (this.isIngredientInCurrentRecipe(ingredient.getName())){
                    // remove the caught ingredient from screen
                    let index = this.ingredients.indexOf(ingredient);
                    this.ingredients.splice(index, 1);
    
                    // remove the caught ingredient from the currentRecipe
                    let ingredientInRecipe = this.currentRecipe.getIngredients().find(i => i.name === ingredient.getName())
                    
                    if(ingredientInRecipe) {
                    // If amount is over 0 decrese amount
                    if(ingredientInRecipe.amount > 0) {
                        ingredientInRecipe.amount -= 1;
                        // If won level: update level and move to winnerScene
                        if(ingredientInRecipe.amount === 0) {
                            if(this.currentRecipe.getIngredients().every(i => i.amount === 0)) {
                                this.gameLevel.nextLevel();
                                this.ingredients = [];
                                this.game.setActiveScene("winnerScene");
                            }
                        }
                    }
                }
                // draw recipe text
                this.currentRecipe.draw();
                } else {
                    // Set timer to 0
                    this.resetGame();
                    this.game.setActiveScene("looserScene");
                }
            }
        }
    }

    resetLevelScene() {
        // this.currentTime = this.resetTime;
        // this.currentRecipe = this.originalRecipe;
        // updateDisplay();
      }
}


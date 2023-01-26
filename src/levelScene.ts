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

    //Exit Button
    private position: p5.Vector;
    private size: p5.Vector;
    private text: string;
    private hover: boolean;
    private onClick: () => void;

    constructor(game: IScene, position: p5.Vector, text: string, MenuScene: Scene) {
        super(images.playerBowl, createVector(width * 0.5, height * .75), createVector(220, 220), createVector(0, 0));
        this.tableCloth = images.backgroundObjects.tableCloth;
        this.recipeFactory = new RecipeFactory();
        this.currentRecipe = this.recipeFactory.getRecipe(2);
        this.recipeBackground = createVector((innerWidth/4-225), 580, 50);
        this.timer = new Time();
        this.game = game;

        //Exit Button
        this.position = position;
        this.size = createVector(innerWidth/2+25, 580), "Exit", "menuScene";
        this.text = text;
        this.hover = false;
        this.onClick = () => game.setActiveScene(MenuScene) 

        this.time = 0;
        this.ingredients = [];
        this.ingredientTypes = ["apple", "banana", "blueberry", "butter", "cherry", "chocolate", "egg", "flour", "milk", "strawberry", "sugar"];
        this.player = new Player(images.playerBowl, createVector(width * 0.5-110, height * .70), createVector(220, 200), createVector(0, 0));
        this.lastIngredient = undefined;

  
    }

    public drawRecipe(recipe: Recipe) {
        textSize(20);
        let currentRecipe = this.recipeFactory.getRecipe(1); // 1 är nivånummer
        this.drawRecipe(currentRecipe);
    }

    public createIngredient() {
        const randomIndex = Math.floor(Math.random()*this.ingredientTypes.length)
        const randomIngredient = this.ingredientTypes[randomIndex];
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
        
        this.ingredientCollisionWithPlayer();
        this.player.update();

        //Exit Button
        if (mouseX > this.position.x && mouseX < this.position.x + this.size.x && mouseY > this.position.y && mouseY < this.position.y + this.size.y) {
            if (mouseIsPressed) {
            this.onClick();
            }
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

        this.player.handleInput();
        this.player.draw();
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

    //Exit Button
    if (this.hover) {
        fill("#946AA3");
    } else {
        fill("#B599BF");
    }
    rect(this.position.x, this.position.y, this.size.x, this.size.y, 0);
    fill("#fff");
    textSize(28);
    textStyle(NORMAL)
    textAlign(CENTER, CENTER)
    text(this.text, this.position.x + this.size.x / 2, this.position.y + this.size.y / 2);
    }

    public checkHover() {
        if (mouseX > this.position.x && mouseX < this.position.x + this.size.x && mouseY > this.position.y && mouseY < this.position.y + this.size.y) {
            this.hover = true;
        } else {
            this.hover = false;
        }
    }

    private isIngredientInCurrentRecipe(ingredientName: string): boolean {
        return this.currentRecipe.getIngredients().some(ingredientData => ingredientData.name === ingredientName);
    }

    public ingredientCollisionWithPlayer(): boolean {
        for (let ingredient of this.ingredients) {
            if (ingredient.isCollidingWithPlayer(this.player.getPosition(), this.player.getSize())) {
                if (this.isIngredientInCurrentRecipe(ingredient.getName())){
                    console.log("Ingredient hit: " + ingredient.getName());
                    // remove the caught ingredient
                    let index = this.ingredients.indexOf(ingredient);
                    this.ingredients.splice(index, 1);
                    return true
                } else {
                    this.ingredients = [];
                    // Set timer to 0
                    this.game.setActiveScene("looserScene");
                }
            }
        }
        return false;
    }    
}


    // public drawRecipe(recipe: Recipe) {
    //     textSize(20);
    //     let currentRecipe = this.recipeFactory.getRecipe(1); // 1 är nivånummer
    //     this.drawRecipe(currentRecipe);
    // }
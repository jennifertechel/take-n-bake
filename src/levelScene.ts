/// <reference path="player.ts" />
/// <reference path="recipeFactory.ts" />

class LevelScene extends Player {
    private tableCloth: p5.Image;
    private recipeTitle: string;
    private recipe: string;
    private recipeFactory: RecipeFactory;
    private recipeBackground: p5.Vector;
    private timer: Time;
    private game: IScene;

    constructor(game: IScene) {
        super(images.playerBowl, createVector(width * 0.5, height * .75), createVector(220, 220), createVector(0, 0));
        this.tableCloth = images.backgroundObjects.tableCloth;
        this.recipeTitle = "Pancakes"
        this.recipe = "1 sugar \n4 eggs \n3 milk";
        this.recipeFactory = new RecipeFactory();
        this.recipeBackground = createVector((innerWidth/4-225), 580, 50);
        this.timer = new Time();
        this.game = game;
    }

    public update() {
        // this.game.setActiveScene("play")
        this.timer.update();
    }

    public drawRecipe(recipe: Recipe) {
        textSize(20);
        let currentRecipe = this.recipeFactory.getRecipe(1); // 1 är nivånummer
        this.drawRecipe(currentRecipe);
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
    fill("#A74272");
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
    // text(this.timer.getTime(), windowWidth -70, 40);

    // Tablecloth
    image(this.tableCloth, 0, innerHeight-180, innerWidth, 180);
    }
}

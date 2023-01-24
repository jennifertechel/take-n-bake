/// <reference path="player.ts" />

class LevelScene extends Player {
    private tableCloth: p5.Image;
    private recipeTitle: string;
    private recipe: string;
    private recipeBackground: p5.Vector;
    private timer: number;
    private game: IScene;

    constructor(game: IScene) {
        super(images.playerBowl, createVector(width * 0.5, height * .75), createVector(220, 220), createVector(0, 0));
        this.tableCloth = images.backgroundObjects.tableCloth;
        this.recipeTitle = "Pancakes"
        this.recipe = "1 sugar \n4 eggs \n3 milk";
        this.recipeBackground = createVector((innerWidth/4-225), 580, 50);
        this.timer = 1.34
        this.game = game;
    }

    public update() {
        // this.game.setActiveScene("play")
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
    let recipeLines = this.recipe.split("\n");
    let yPos = 125; // start position for first line of text
    textSize(26);
    fill("#808080");
    textAlign(LEFT, TOP);
    noStroke()

    for (let i = 0; i < recipeLines.length; i++) {
        text(recipeLines[i], 60, yPos);
        yPos += 40; // increment the y-position for next line of text
    }

    // Recipe title
    textStyle(BOLD);
    text(this.recipeTitle, 60, 70);
    textSize(38);

    // Timer
    text(this.timer, windowWidth -120, 40);

    // Tablecloth
    image(this.tableCloth, 0, innerHeight-180, innerWidth, 180);
    }
}
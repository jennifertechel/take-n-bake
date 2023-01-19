/// <reference path="player.ts" />

class LevelScene extends Player {
    private tableCloth: p5.Image;
    private recipe: string;
    private recipeBackground: p5.Vector;
    private game: IScene;

    constructor(game: IScene) {
        super(images.playerBowl, createVector(width * 0.5, height * .75), createVector(220, 220), createVector(0, 0));
        this.tableCloth = images.backgroundObjects.tableCloth;
        this.recipe = "tillfälligt /n 4 av något annat"
        this.recipeBackground = createVector((innerWidth/4-225), 580, 50);

        this.game = game;
    }

    public update() {
        // this.game.setActiveScene("play")
    }
    
    public draw() {
       this.recipeBackground

       // Recipe
       strokeWeight(20);
       stroke("#C6E3DE")
       fill("#F5F5F5");
       rect(30, 30, 250, 382);
       image(this.tableCloth, 0, innerHeight-180, innerWidth, 180);

           // Move this and change player image 
        // player = new Player(images.playerBowl, createVector(width * 0.5, height * .75), createVector(220, 220), createVector(0, 0));
   }
}
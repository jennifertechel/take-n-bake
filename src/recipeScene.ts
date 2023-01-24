/// <reference path="messageBox.ts" />
/// <reference path="recipeFactory.ts" />


class RecipeScene extends MessageBox {
    private RecipeSceneBackground: p5.Vector;
    private tableCloth: p5.Image;
    private buttonStartPlaying;
    private game: IScene;

    constructor(game: IScene) {
        super("Let's make a pancake!"); //Messagebox title
    this.RecipeSceneBackground = createVector((innerWidth/4-225), 580, 50); //Scene size
    this.tableCloth = images.backgroundObjects.tableCloth; 
    this.buttonStartPlaying = new Button(createVector(innerWidth/2-110, 650), "Start", "startScene"); //Creates button to start game
    this.game = game;
    }

    public draw(){

        super.draw(); //Messagebox
        this.RecipeSceneBackground

        image(this.tableCloth, 0, innerHeight-180, innerWidth, 180); //imports tablecloth
        this.buttonStartPlaying.draw();
        this.buttonStartPlaying.checkHover();
    }

}
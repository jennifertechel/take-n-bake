/// <reference path="messageBox.ts" />
/// <reference path="recipe.ts" />
/// <reference path="recipeFactory.ts" />

class RecipeScene extends MessageBox {
    private RecipeSceneBackground: p5.Vector;
    private tableCloth: p5.Image;
    private recipeFactory: RecipeFactory;
    private buttonStartPlaying;
    private game: IScene;

    constructor(game: IScene) {
        super("Let's make a pancake!"); //Messagebox title
    this.RecipeSceneBackground = createVector((innerWidth/4-225), 580, 50); //Scene size
    this.tableCloth = images.backgroundObjects.tableCloth; 
    this.buttonStartPlaying = new Button(createVector(innerWidth/2-110, 650), "Start", "startScene"); //Creates button to start game
    this.game = game;
    this.recipeFactory = new RecipeFactory();
    }

    public draw(){

        super.draw(); //Messagebox
        textSize(26);
        fill("#A74272");
        textAlign(CENTER, CENTER);
        noStroke();
        let recipe = this.recipeFactory.getRecipe(2);
        let yPos = 130; // start position for first line of text
    
        for(let i = 0; i < recipe.getIngredients().length; i++) {
            text(recipe.getIngredients()[i].amount + " " + recipe.getIngredients()[i].name, 60, yPos+i*40);
        }
        this.RecipeSceneBackground

        image(this.tableCloth, 0, innerHeight-120, innerWidth, 180); //imports tablecloth
        this.buttonStartPlaying.draw();
        this.buttonStartPlaying.checkHover();
    }

}
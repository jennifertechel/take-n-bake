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
        super(" "); //Messagebox title
    this.RecipeSceneBackground = createVector((innerWidth/4-225), 580, 50); //Scene size
    this.tableCloth = images.backgroundObjects.tableCloth; 
    this.buttonStartPlaying = new Button(createVector(innerWidth/2-110, 650), "Start", "startScene"); //Creates button to start game
    this.game = game;
    this.recipeFactory = new RecipeFactory();
    }

    public draw(){

        super.draw(); //Messagebox
        textSize(60);
        fill("#000000");
        textAlign(LEFT);
        // textLeading(100);
        noStroke();
        let recipe = this.recipeFactory.getRecipe(1);
        let yPos = 430; // start position for first line of text
        let xPos = 1000;
    
        for(let i = 0; i < recipe.getIngredients().length; i++) {
            text(recipe.getIngredients()[i].amount + " " + recipe.getIngredients()[i].name, 850, yPos+i*40);
           
        }
        
        

        textStyle(BOLD);
        fill("#808080");
        text(recipe.getName(), 820, 250);
        textSize(100);
        textAlign(CENTER, TOP);

        this.RecipeSceneBackground

        image(this.tableCloth, 0, innerHeight-120, innerWidth, 180); //imports tablecloth
        this.buttonStartPlaying.draw();
        this.buttonStartPlaying.checkHover();
    }

}
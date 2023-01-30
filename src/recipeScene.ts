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
    this.buttonStartPlaying = new Button(createVector(innerWidth/2-110, 550), "Start", "startScene"); //Creates button to start game
    this.game = game;
    this.recipeFactory = new RecipeFactory();
    }

    public draw(){

        super.draw(); //Messagebox
        textSize(60);
        fill("#000000");
        textAlign(LEFT);
        noStroke();
        let recipe = this.recipeFactory.getRecipe(1);
        let yPos = 325; // start position for first line of text
        
    

    private game: IScene;
    private gameLevel: ILevel;
    private recipeFactory: RecipeFactory;
    private buttonStartGame: Button;

    constructor(game: IScene, time: number, gameLevel: ILevel) {
        super("Lets make a");
        this.game = game;
        this.gameLevel = gameLevel;
        this.recipeFactory = new RecipeFactory();
        this.buttonStartGame = new Button(createVector(innerWidth/2-100, innerHeight/2 + 155), "Start", "levelScene");
        
    }
    
    public update() {
        this.buttonStartGame.update();
    }
    
    public draw() {
        let currentLevel = this.gameLevel.getCurrentLevel();

        // let level = this.game.getCurrentLevel();
        console.log("Current level:", currentLevel);
        // Ritar ut messageBox
        super.draw();

        // Recipe text
        textSize(26);
        fill("#808080");
        noStroke()
        let recipe = this.recipeFactory.getRecipe(currentLevel);
        let yPos = 330; // start position for first line of text

        for(let i = 0; i < recipe.getIngredients().length; i++) {
            text(recipe.getIngredients()[i].amount + " " + recipe.getIngredients()[i].name, 625, yPos+i*40);
        }

        textStyle(BOLD);
        fill("#808080");
        text(recipe.getName(), 605, 200);
        textSize(100);
        textAlign(CENTER, TOP);
        textLeading(10);

        this.RecipeSceneBackground

        image(this.tableCloth, 0, innerHeight-60, innerWidth, 180); //imports tablecloth
        this.buttonStartPlaying.draw();
        this.buttonStartPlaying.checkHover();
    }

}
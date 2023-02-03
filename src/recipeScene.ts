/// <reference path="recipeFactory.ts" />
/// <reference path="messageBox.ts" />

class RecipeScene extends MessageBox {
    private game: IScene;
    private gameLevel: ILevel;
    private recipeFactory: RecipeFactory;
    private buttonStartGame: Button;

    constructor(game: IScene, gameLevel: ILevel) {
        super("Lets make");
        this.game = game;
        this.gameLevel = gameLevel;
        this.recipeFactory = new RecipeFactory();
        this.buttonStartGame = new Button(createVector(innerWidth/2-100, innerHeight/2 + 150), "Start", "levelScene");
        
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
        textSize(30);
        fill("#808080");
        noStroke()
        let recipe = this.recipeFactory.getRecipe(currentLevel);
        let yPos = 430; // start position for first line of text
        for(let i = 0; i < recipe.getIngredients().length; i++) {
        text(recipe.getIngredients()[i].amount + " " + recipe.getIngredients()[i].name, windowWidth/2, yPos+i*40);
    }

    // Recipe title
        textStyle(BOLD);
        textSize(60);
        text(recipe.getName(), windowWidth/2, 360);

        this.buttonStartGame.draw();
        this.buttonStartGame.checkHover();
    
    }
}

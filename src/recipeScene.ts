/// <reference path="recipeFactory.ts" />
/// <reference path="messageBox.ts" />

class RecipeScene extends MessageBox {
    private game: IScene;
    private recipeFactory: RecipeFactory;
    private buttonStartGame: Button;


    constructor(game: IScene, time: number) {
        super("Lets make a");
        this.game = game;
        this.recipeFactory = new RecipeFactory();
        this.buttonStartGame = new Button(createVector(innerWidth/2-100, innerHeight/2 + 155), "Start", "levelScene");
    
    }
    public drawRecipe(recipe: Recipe) {
        textSize(20);
        let currentRecipe = this.recipeFactory.getRecipe(1);
        this.drawRecipe(currentRecipe);
    }

    public update() {
        this.buttonStartGame.update();
    }
    
    public draw() {
        // Ritar ut messageBox
        super.draw();
        

    // Recipe text
        textSize(26);
        fill("#808080");
        noStroke()
        let recipe = this.recipeFactory.getRecipe(2);
        let yPos = 290; // start position for first line of text
        for(let i = 0; i < recipe.getIngredients().length; i++) {
        text(recipe.getIngredients()[i].amount + " " + recipe.getIngredients()[i].name, windowWidth/2, yPos+i*40);
    }

    // Recipe title
        textStyle(BOLD);
        textSize(35);
        text(recipe.getName(), windowWidth/2, 240);

        this.buttonStartGame.draw();
        this.buttonStartGame.checkHover();
    
    }
}

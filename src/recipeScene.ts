/// <reference path="messageBox.ts" />

class RecipeScene extends MessageBox {
    private game: IScene;
    private buttonStartGame: Button;


    constructor(game: IScene, time: number) {
        super("Lets make a pancake!");
        this.game = game;
        this.buttonStartGame = new Button(createVector(innerWidth/2-100, innerHeight/2 + 155), "Start", "levelScene");
    
    }
    
    public update() {
        this.buttonStartGame.update();
    }
    
    public draw() {
        // Ritar ut messageBox
        super.draw();

        this.buttonStartGame.draw();
        this.buttonStartGame.checkHover();
 
    }
}
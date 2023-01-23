/// <reference path="messageBox.ts" />

class LooserScene extends MessageBox {
    private buttonRestart: Button;
    private buttonQuit: Button;
    private image: p5.Image;
    private game: IScene;

    constructor(game: IScene) {
        super("Ops...try again!");
        this.game = game;
        this.buttonRestart = new Button(createVector(innerWidth/2-225, 580), "Restart", "levelScene");
        this.buttonQuit = new Button(createVector(innerWidth/2+25, 580), "Quit game", "startScene");
        this.image = images.spilledBowl;
    }

    public update() {
        const wasClicked = this.buttonRestart.update();
        this.buttonQuit.update();
        this.buttonRestart.update();
        // this.game.setActiveScene("play")
   }

    public draw() {
        super.draw();
        this.buttonRestart.draw();
        this.buttonQuit.draw();
        this.buttonRestart.checkHover();
        this.buttonQuit.checkHover();
        image(this.image, innerWidth/2-150, innerHeight/2-145);
    }
}
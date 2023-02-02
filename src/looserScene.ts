/// <reference path="messageBox.ts" />

class LooserScene extends MessageBox {
    private buttonRestart: Button;
    private buttonQuit: Button;
    private image: p5.Image;
    private game: IScene;
    private instruction: String;

    constructor(game: IScene) {
        super("Ops... \n ");
        this.instruction = 'You caught the wrong ingredient...try again! ';
        this.game = game;
        this.buttonRestart = new Button(createVector(innerWidth/2-225, innerHeight/2 + 150), "Restart", "levelScene");
        this.buttonQuit = new Button(createVector(innerWidth/2+25, innerHeight/2 + 150), "Quit game", "startScene");
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
        textSize(30);
        textAlign(CENTER);
        text(this.instruction, innerWidth/2, 250);
        cursor(ARROW);
        this.buttonRestart.draw();
        this.buttonQuit.draw();
        this.buttonRestart.checkHover();
        this.buttonQuit.checkHover();
        image(this.image, innerWidth/2-150, innerHeight/2-150);
    }
}
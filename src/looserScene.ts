/// <reference path="messageBox.ts" />

class LooserScene extends MessageBox {
    private buttonRestart: Button;
    private buttonQuit: Button;
    private image: p5.Image;
    private game: IScene;

    constructor(game: IScene) {
        super("Du förlorade!");
        this.game = game;
        this.buttonRestart = new Button(createVector(300, 300), "Restart");
        this.buttonQuit = new Button(createVector(300, 400), "Quit game");
        this.image = images.spilledBowl;
    }

    public update() {
        const wasClicked = this.buttonRestart.update();
        this.buttonQuit.update();
        // this.game.setActiveScene("play")
   }

    public draw() {
        super.draw();
        fill("#000");
        textSize(32);
        this.buttonRestart.draw();
        this.buttonQuit.draw();
        image(this.image, innerWidth/2 - 150, innerHeight/2 + 100);
    }
}

    // Buttons should be moved
    // menuButton = new Button(createVector(windowWidth/2-230, 550), createVector(200, 70), "Menu");
    // restartButton = new Button(createVector(windowWidth/2+30, 550), createVector(200, 70), "Restart");

// Något liknande bör finnas i game

// let loserFrame: LoserFrame;
// import { LoserFrame } from "./loserFrame";
// import { Button } from "./button";
// loserFrame = new LoserFrame("Ops...try again!", "Sorry, you lost the game", new Button("Retry"), new Button("Menu"), images.spilledBowl);
// loserFrame = new LoserFrame("Ops...try again!", "Sorry, you lost the game", button1, button2, images.spilledBowl);
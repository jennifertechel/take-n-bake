/// <reference path="messageBox.ts" />

class FinalScene extends MessageBox {
    private buttonMenu: Button;
    private image: p5.Image;
    private instruction: String;

    constructor() {
        super("Grandma's happy!\n");
        this.instruction = "You finished all of her recipes"
        this.image = images.grandma;
        this.buttonMenu = new Button(createVector(innerWidth/2-100, innerHeight/2 + 155), "Menu", "menuScene");
    }

    public update() {
        this.buttonMenu.update();
    }

    public draw() {
        super.draw();
        textSize(30);
        textAlign(CENTER);
        text(this.instruction, innerWidth/2, 230);
        text(this.instruction, innerWidth/2, 230);
        this.buttonMenu.draw();
        this.buttonMenu.checkHover();
        image(this.image, innerWidth/2-130, innerHeight/2-120, 250, 250);
    }
}
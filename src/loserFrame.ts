import { MessageBox } from './messageBox';
import { Button } from './button';
export class LoserFrame extends MessageBox {
    private text: string;
    private button1: Button;
    private button2: Button;
    private image: any;

    constructor(title: string, text: string, button1: Button, button2: Button, image: p5.Image) {
        super(title);
        this.text = text;
        this.button1 = button1;
        this.button2 = button2;
        this.image = image;
    }

    public update() {
        super.update();
        this.button1.update();
        this.button2.update();
    }

    public draw() {
        super.draw();
        fill("#000");
        textSize(32);
        text(this.text, innerWidth/2, innerHeight/2);
        this.button1.draw();
        this.button2.draw();
        image(this.image, innerWidth/2 - 150, innerHeight/2 + 100);
    }
}

// Något liknande bör finnas i game

// let loserFrame: LoserFrame;
// import { LoserFrame } from "./loserFrame";
// import { Button } from "./button";
// loserFrame = new LoserFrame("Ops...try again!", "Sorry, you lost the game", new Button("Retry"), new Button("Menu"), images.spilledBowl);
// loserFrame = new LoserFrame("Ops...try again!", "Sorry, you lost the game", button1, button2, images.spilledBowl);
/// <reference path="messageBox.ts" />

class WinnerScene extends MessageBox {
    private buttonNextLevel: Button;
    private buttonMenu: Button;
    private image: p5.Image;
    private starFilled: p5.Image;
    private starOutlined: p5.Image;
    private game: IScene;
    private starCount: Number;

    constructor(game: IScene) {
        super("Congrats!");
        this.game = game;
        this.buttonNextLevel = new Button(createVector(innerWidth/2-220, 610), "Next level");
        this.buttonMenu = new Button(createVector(innerWidth/2+20, 610), "Menu");
        this.image = images.recipes.pancake;
        this.starFilled = images.starFilled;
        this.starOutlined = images.starOutlined;
        this.starCount = 3;
    }
    
    public update() {
        const wasClicked = this.buttonNextLevel.update();
        this.buttonMenu.update();
        // this.game.setActiveScene("play")
    }
    
    public draw() {
        super.draw();
        const starImages = [this.starFilled, this.starOutlined]
        for (let i = 0; i < starImages.length; i++) {
            image(starImages[i], innerWidth/2 - 100 + (i * 70), innerHeight/2 + 70);
        }
        fill("#000");
        textSize(32);
        this.buttonNextLevel.draw();
        this.buttonMenu.draw();
        image(this.image, innerWidth/2-150, innerHeight/2-160);    }
}
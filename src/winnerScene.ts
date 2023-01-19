/// <reference path="messageBox.ts" />

class WinnerScene extends MessageBox {
    private buttonNextLevel: Button;
    private buttonMenu: Button;
    private image: p5.Image;
    private starFilled: p5.Image;
    private starOutlined: p5.Image;
    private game: IScene;
    private starCount: number;

    constructor(game: IScene) {
        super("Congrats!");
        this.game = game;
        this.buttonNextLevel = new Button(createVector(innerWidth/2-220, innerHeight/2 + 155), "Next level");
        this.buttonMenu = new Button(createVector(innerWidth/2+20, innerHeight/2 + 155), "Menu");
        this.image = images.recipes.pancake;
        this.starFilled = images.starFilled;
        this.starOutlined = images.starOutlined;
        this.starCount = 2;
        // starCount will change to something like score.numberOfStars
    }
    
    public update() {
        const wasClicked = this.buttonNextLevel.update();
        this.buttonMenu.update();
        // this.game.setActiveScene("play")
        this.buttonMenu.update();
        this.buttonNextLevel.update();
    }
    
    public draw() {
        super.draw();
        const starImages = [this.starFilled, this.starOutlined]
    for (let i = 0; i < this.starCount; i++) {
        image(this.starFilled, innerWidth/2 - 110 + (i * 80), innerHeight/2 + 58);
    }
    for (let i = 0; i < 3-this.starCount; i++) {
        image(this.starOutlined, innerWidth/2 - 50 + (i * 80)+(this.starCount*50), innerHeight/2 + 58);
    }
        fill("#000");
        textSize(32);
        this.buttonNextLevel.draw();
        this.buttonMenu.draw();
        this.buttonNextLevel.checkHover();
        this.buttonMenu.checkHover();
        image(this.image, innerWidth/2-120, innerHeight/2-170);    
    }
}
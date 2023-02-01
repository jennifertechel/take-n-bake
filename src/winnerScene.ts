/// <reference path="messageBox.ts" />

class WinnerScene extends MessageBox {
    private buttonNextLevel: Button;
    private buttonMenu: Button;
    private image: p5.Image;
    private starFilled: p5.Image;
    private starOutlined: p5.Image;
    private game: IScene;
    private score: Score;

    constructor(game: IScene, time: number) {
        super("Congrats!");
        this.game = game;
        this.score = new Score(time);
        this.buttonNextLevel = new Button(createVector(innerWidth/2-220, innerHeight/2 + 200), "Next level", "recipeScene");
        this.buttonMenu = new Button(createVector(innerWidth/2+20, innerHeight/2 + 200), "Menu", "menuScene");
        // Change image to the current recipe
        this.image = images.recipes.pancake;
        this.starFilled = images.starFilled;
        this.starOutlined = images.starOutlined;
    }
    
    public update() {
        this.buttonMenu.update();
        this.buttonNextLevel.update();
    }
    
    public draw() {

        cursor(ARROW);

        // Draw the messageBox with title
        super.draw();

        // Add all stars
        for (let i = 0; i < this.score.getStars(); i++) {
            image(this.starFilled, innerWidth/2 - 110 + (i * 80), innerHeight/2 + 58);
        }
        for (let i = 0; i < 3 - Number(this.score.getStars()); i++) {
            image(this.starOutlined, innerWidth/2 - 50 + (i * 80)+ Number(this.score.getStars())*50, innerHeight/2 + 58);
        }

        this.buttonNextLevel.draw();
        this.buttonMenu.draw();
        this.buttonNextLevel.checkHover();
        this.buttonMenu.checkHover();

        // Image of done recipe, will change to the current recipe 
        image(this.image, innerWidth/2-120, innerHeight/2-170);    
    }
}
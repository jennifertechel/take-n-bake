/// <reference path="messageBox.ts" />

class WinnerScene extends MessageBox {
    private buttonNextLevel: Button;
    private buttonMenu: Button;
    private image: p5.Image;
    private starFilled: p5.Image;
    private starOutlined: p5.Image;
    private level: ITime;

    constructor(level: ITime) {
        super("Congrats!");
        this.level = level;
        this.buttonNextLevel = new Button(createVector(innerWidth/2-220, innerHeight/2 + 155), "Next level", "recipeScene");
        this.buttonMenu = new Button(createVector(innerWidth/2+20, innerHeight/2 + 155), "Menu", "menuScene");
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
    for (let i = 0; i < this.getStars(); i++) {
        push();
        let x = innerWidth/2 - 128 + (i * 95);
        let y = innerHeight/2 + 55;
        x = x / 0.45;
        y = y / 0.45;
        scale(0.45);
        image(this.starFilled, x, y);
        pop();
    }
    for (let i = 0; i < 3 - Number(this.getStars()); i++) {
        push();
        let x = innerWidth/2 - 128 + ((i + Number(this.getStars())) * 95);
        let y = innerHeight/2 + 55;
        x = x / 0.45;
        y = y / 0.45;
        scale(0.45);
        image(this.starOutlined, x, y);
        pop();
    }

        this.buttonNextLevel.draw();
        this.buttonMenu.draw();
        this.buttonNextLevel.checkHover();
        this.buttonMenu.checkHover();

        // Image of done recipe, will change to the current recipe 
        image(this.image, innerWidth/2-120, innerHeight/2-170);    
    }

    private getStars() {
        const time = this.level.getTime();
        if (time <= 30) {
            return 3;
        } else if (time <= 60) {
            return 2;
        } else {
            return 1;
        }
    }
}
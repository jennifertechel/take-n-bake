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
            image(this.starFilled, innerWidth/2 - 110 + (i * 80), innerHeight/2 + 58);
        }
        for (let i = 0; i < 3 - Number(this.getStars()); i++) {
            image(this.starOutlined, innerWidth/2 - 50 + (i * 80)+ Number(this.getStars())*50, innerHeight/2 + 58);
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
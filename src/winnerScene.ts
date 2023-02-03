/// <reference path="messageBox.ts" />

class WinnerScene extends MessageBox {
    private buttonNextLevel: Button;
    private buttonMenu: Button;
    private image: p5.Image;
    private starFilled: p5.Image;
    private starOutlined: p5.Image;
    private level: ITime;
    private gameLevel: ILevel;

    constructor(level: ITime, gameLevel: ILevel) {
        super("Congrats!");
        this.level = level;
        this.gameLevel = gameLevel;
        this.buttonMenu = new Button(createVector(innerWidth/2+20, innerHeight/2 + 155), "Menu", "menuScene");
        // this.image = new RecipeFactory().getRecipeData(gameLevel.getCurrentLevel()).image;
        this.image = images.recipes.pancake;
        this.starFilled = images.starFilled;
        this.starOutlined = images.starOutlined; 

        if (gameLevel.getCurrentLevel() === 3) {
            this.buttonNextLevel = new Button(createVector(innerWidth/2-220, innerHeight/2 + 155), "Finish", "finalScene");
        } else {
            this.buttonNextLevel = new Button(createVector(innerWidth/2-220, innerHeight/2 + 155), "Next level", "recipeScene");
        }
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
        const starDistance = 80;
        let x = innerWidth/2 - 110;
        for (let i = 0; i < this.getStars(); i++) {
            image(this.starFilled, x, innerHeight/2 + 58);
            x += starDistance;
        }
        for (let i = 0; i < 3 - Number(this.getStars()); i++) {
            image(this.starOutlined, x, innerHeight/2 + 58);
            x += starDistance;
        }

        // Image of the recipe
        if (this.gameLevel.getCurrentLevel() == 1) {
            this.image = images.recipes.pancake;
        }
        else if (this.gameLevel.getCurrentLevel() == 2) {
            this.image = images.recipes.pie;
        }
        else {
            this.image = images.recipes.chocolateCake;
        };

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
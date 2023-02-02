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
        this.buttonNextLevel = new Button(createVector(innerWidth/2-220, innerHeight/2 + 155), "Next level", "recipeScene");
        this.buttonMenu = new Button(createVector(innerWidth/2+20, innerHeight/2 + 155), "Menu", "menuScene");
        this.gameLevel = gameLevel;
        this.level = level;
        this.starFilled = images.starFilled;
        this.starOutlined = images.starOutlined;
        
        this.image = new RecipeFactory().getRecipeData(gameLevel.getCurrentLevel()).image;
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
            image(this.starOutlined, innerWidth/2 - 110 + ((i + Number(this.getStars())) * 80), innerHeight/2 + 58);
        }   

        console.log(this.level.getTime())

        // Image of the recipe
        if (this.gameLevel.getCurrentLevel() == 2) {
            this.image = images.recipes.pancake;
        }
        else if (this.gameLevel.getCurrentLevel() == 3) {
            this.image = images.recipes.pie;
        }
        else {
            this.image = images.recipes.chocolateCake;
        };

        console.log(this.level.getTime())

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
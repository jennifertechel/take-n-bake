class StartScene {

    private image: p5.Image;
    private image2: p5.Image;
    private logo: p5.Image;
    private buttonGoToGame: Button;
    private game: IScene;

    constructor(game: IScene) { 
        this.game = game;
        this.buttonGoToGame = new Button(createVector(innerWidth/2-100, innerHeight/2+120), "Start", "menuScene");
        this.image = images.backgroundObjects.frostingBig;
        this.image2 = images.backgroundObjects.sprinkles;
        this.logo = images.logo;
    }

    public update() {
        this.buttonGoToGame.update();
    }

    public draw() {
        noStroke();
        this.buttonGoToGame.draw();
        this.buttonGoToGame.checkHover();

        image(this.image, 0, -100, innerWidth);
        image(this.image2, width - this.image2.width, height - this.image2.height ); // position x y, bild x y
        image(this.logo, innerWidth/2-220, innerHeight/2-210, 417, 293); // position x y, bild ändra storlek och kanske designen i figma eller 
    }

    }
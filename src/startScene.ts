class StartScene {

    private image: p5.Image;
    private image2: p5.Image;
    private logo: p5.Image;
    private buttonGoToGame: Button;
    private game: IScene;

    

    constructor(game: IScene) { 
        this.game = game;
        this.buttonGoToGame = new Button(createVector(600, 600), "Start game");
        this.image = images.backgroundObjects.frostingBig;
        this.image2 = images.backgroundObjects.sprinkles;
        this.logo = images.logo;
    }

    public update() {
        this.buttonGoToGame.update();
    }

    public draw() {
        fill("#000");
        textSize(32);
        this.buttonGoToGame.draw();
        image(this.image, 0, 0);
        image(this.image2, width - this.image2.width, height - this.image2.height ); // position x y, bild x y
        image(this.logo, 300, 300); // position x y, bild x y
    }


    }
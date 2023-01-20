class StartScene {

    private image: p5.Image;
    private buttonGoToGame: Button;
    private game: IScene;

    

    constructor(game: IScene) { 
        this.game = game;
        this.buttonGoToGame = new Button(createVector(600, 600), "Start game");
        this.image = images.backgroundObjects.frostingBig;
    }

    public update() {
        this.buttonGoToGame.update();
    }

    public draw() {
        fill("#000");
        textSize(32);
        this.buttonGoToGame.draw();
        image(this.image, 0, 0);
    }




    }
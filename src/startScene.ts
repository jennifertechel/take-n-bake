class StartScene {

    private image: p5.Image;
    private buttonGoToGame: Button;
    private game: IScene;

    

    constructor() { 
        this.game = new Game;
        this.buttonGoToGame = new Button(createVector(300, 300), "Restart");
        this.image = images.backgroundObjects.frostingBig;
    }

    public draw() {
        fill("#000");
        textSize(32);
        this.buttonGoToGame.draw();
        image(this.image, innerWidth/2 - 150, innerHeight/2 + 100);
    }

    public setup() {

    }

    public update() {

    }
    }
class StartPage {

    protected position: p5.Vector;
    protected image: p5.Image;

    constructor(image: p5.Image) {
        this.position = createVector();
        this.image = loadImage("assets/images/frostingBig.svg")
    }

    public draw() {
        image(this.image, 0, 0);
    }

    public setup() {

    }

    public update() {

    }


}

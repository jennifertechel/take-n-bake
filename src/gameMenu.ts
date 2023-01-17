class GameMenu {
    protected position: p5.Vector;
    protected image: p5.Image;
    
    
    constructor (image: p5.Image) {
        this.position = createVector();
        this.image = loadImage("assets/images/frostingSmal.svg");

    }

    public setup() {

    }
    public draw() {
        image(this.image,0, 0);
    }
    public update() {

    }



    
}
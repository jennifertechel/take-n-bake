import { Vector } from "p5";

function preload(){
    playerImage = loadImage("assets/images/BOWL.svg");
}

let player: Player;
let playerImage: p5.Image;


class movingObject {
    protected image: p5.Image;
    protected position: p5.Vector;
    protected size: p5.Vector;
    protected velocity: p5.Vector;

    constructor (
        image: p5.Image, 
        position: p5.Vector, 
        size: p5.Vector, 
        velocity: p5.Vector
        ) {
        this.image = image;
        this.position = position;
        this.size = size;
        this.velocity = velocity;
    }

    public update() {
        // update the position of the object based on its velocity
        this.position.add(this.velocity);
    }

    public draw() {
        // draw the object's image on the canvas at its current position
        image(this.image, this.position.x, this.position.y, this.size.x, this.size.y);
    }
}

class Player extends movingObject {
    constructor (image: p5.Image, position: p5.Vector, size: p5.Vector, velocity: p5.Vector) {
        super(image, position, size, velocity);
    }

    public handleInput() {
        // handle arrow key input to update the player's velocity
        if (keyIsDown(LEFT_ARROW)) {
            this.velocity.x = -5;
        } else if (keyIsDown(RIGHT_ARROW)) {
            this.velocity.x = 5;
        } else {
            this.velocity.x = 0;
        }
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(60);

    // initialize the player object with the loaded image
    player = new Player(playerImage, createVector(0, 0), createVector(50, 50), createVector(0, 0));
}

function draw() {
    player.handleInput();
    player.update();
    player.draw();
}

preload();
draw();
setup();
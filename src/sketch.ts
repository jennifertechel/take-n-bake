//---- GLOBAL VARIABLES ----//
// let game: Game;
// let sound: p5.SoundFile
let player: Player;
let playerImage: p5.Image;

//let ingredient: Ingredients;

/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
  playerImage = loadImage("assets/images/BOWL.svg");

    // sound: p5.SoundFile = loadSound('../assets/mySound.wav');
}

/**
 * Built in setup function in P5
 * This is a good place to create your first class object
 * and save it as a global variable so it can be used
 * in the draw function below
 */
function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(60);
    // noCursor();
    player = new Player(playerImage, createVector(width * 0.5, height * .75), createVector(220, 220), createVector(0, 0));
    // game = new Game();
}

/**
 * Built in draw function in P5
 * This is a good place to call public methods of the object
 * you created in the setup function above
 */
function draw() {
    background('blue');
    fill('green');
    stroke('white');
    strokeWeight(10);
    circle(width * .5, height * .5, width * 0.2);

    player.handleInput();
    player.update();
    player.draw();
}


/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
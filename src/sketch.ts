//---- GLOBAL VARIABLES ----//
// let game: Game;
// let sound: p5.SoundFile
let player: Player;
let menuButton: Button;
let restartButton: Button;
let playerImage: p5.Image;

/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
  playerImage = loadImage("assets/images/BOWL.svg");


  // DESIGN
//   const logoImage = loadImage("assets/images/logo.svg");
//   const logo2Image = loadImage("assets/images/logo.png");
//   const frostingBigImage = loadImage("assets/images/frostingBig.svg");
//   const frostingStartsiteImage = loadImage("assets/images/frostingStartsite.png");
//   const frostingSmalImage = loadImage("assets/images/frostingSmal.svg");
//   const frostingTopImage = loadImage("assets/images/frostingTop.png");
//   const sprinklesImage = loadImage("assets/images/sprinkles.svg");
//   const sprinkles2Image = loadImage("assets/images/sprinkles.png");
//   const tableClothImage = loadImage("assets/images/tableCloth.svg");
//   const tableClothRedImage = loadImage("assets/images/tableClothRed.png");
//   const starOutlineImage = loadImage("assets/images/starOutline.svg");
//   const starImage = loadImage("assets/images/star.svg");

//   // CAKES
//   const pancakeImage = loadImage("assets/images/pancake.svg");
//   const pieImage = loadImage("assets/images/pie.svg");
//   const chocolateCakeImage = loadImage("assets/images/logo.svg");
//   const spilledBowlImage = loadImage("assets/images/spilled-bowl.svg");


//   // INGRIDIENTS
//   const appleImage = loadImage("assets/images/Ingredients/apple.svg");
//   const bananaImage = loadImage("assets/images/Ingredients/banana.svg");
//   const butterImage = loadImage("assets/images/Ingredients/butter.svg");
//   const cherryImage = loadImage("assets/images/Ingredients/cherry.svg");
//   const chocolateImage = loadImage("assets/images/Ingredients/chocolate.svg");
//   const eggImage = loadImage("assets/images/Ingredients/egg.svg");
//   const flourImage = loadImage("assets/images/Ingredients/flour.svg");
//   const milkImage = loadImage("assets/images/Ingredients/milk.svg");
//   const strawberryImage = loadImage("assets/images/Ingredients/strawberry.svg");
//   const sugarImage = loadImage("assets/images/Ingredients/sugar.svg");



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

    let menuButton = new Button(windowWidth/2 - 182, windowHeight/2 + 150, "Menu", "#C6E3DE", "#23c471");
    let restartButton = new Button(windowWidth/2 + 10, windowHeight/2 + 150, "Restart", "#C6E3DE", "#23c471");
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
    menuButton.draw();
    restartButton.draw();
    
}


/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
//---- GLOBAL VARIABLES ----//
// let game: Game;
// let sound: p5.SoundFile
let player: Player;
let menuButton: Button;
let restartButton: Button;
let images: Images;
let game: Game;

type IngredientKey = keyof Images['ingredients'];
type RecipeKey = keyof Images['recipes'];
type backgroundKey = keyof Images['backgroundObjects'];

interface Images {
    logo: p5.Image;
    starOutlined: p5.Image;
    starFilled: p5.Image;
    playerBowl: p5.Image;
    spilledBowl: p5.Image;
    ingredients: {
        strawberry: p5.Image;
        apple: p5.Image;
        banana: p5.Image;
        butter: p5.Image;
        cherry: p5.Image;
        chocolate: p5.Image;
        egg: p5.Image;
        flour: p5.Image;
        milk: p5.Image;
        sugar: p5.Image;
        blueberry: p5.Image;
    }
    recipes: {
        pancake: p5.Image;
        pie: p5.Image;
        chocolateCake: p5.Image;
    }
    backgroundObjects: {
        frostingBig: p5.Image;
        frostingSmall: p5.Image;
        sprinkles: p5.Image;
        tableCloth: p5.Image;
    }
}

/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {

    images = {
        logo: loadImage("assets/images/logoBig.svg"),
        starOutlined: loadImage("assets/images/starOutline.svg"),
        starFilled: loadImage("assets/images/star.svg"),
        playerBowl: loadImage("assets/images/BOWL.svg"),
        spilledBowl: loadImage("assets/images/spilled-bowl.svg"),
        ingredients: {
            strawberry: loadImage("assets/images/Ingredients/strawberry.svg"),
            apple: loadImage("assets/images/Ingredients/apple.svg"),
            banana: loadImage("assets/images/Ingredients/banana.svg"),
            butter: loadImage("assets/images/Ingredients/butter.svg"),
            cherry: loadImage("assets/images/Ingredients/cherry.svg"),
            chocolate: loadImage("assets/images/Ingredients/chocolate.svg"),
            egg: loadImage("assets/images/Ingredients/egg.svg"),
            flour: loadImage("assets/images/Ingredients/flour.svg"),
            milk: loadImage("assets/images/Ingredients/milk.svg"),
            sugar: loadImage("assets/images/Ingredients/sugar.svg"),
            blueberry: loadImage("assets/images/Ingredients/blueberry.svg")
        },
        recipes: {
            pancake: loadImage("assets/images/pancake.svg"),
            pie: loadImage("assets/images/pie.svg"),
            chocolateCake: loadImage("assets/images/logo.svg")
        },
        backgroundObjects: {
            frostingBig: loadImage("assets/images/startFrosting.svg"),
            frostingSmall: loadImage("assets/images/frostingSmal.svg"),
            sprinkles: loadImage("assets/images/sprinkles.svg"),
            tableCloth: loadImage("assets/images/tableCloth.svg")
        }
    }
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
    //noCursor();

    
    // Move this and change player image 
    player = new Player(images.playerBowl, createVector(width * 0.5, height * .70), createVector(290, 290), createVector(0, 0));

    game = new Game();
}

/**
 * Built in draw function in P5
 * This is a good place to call public methods of the object
 * you created in the setup function above
 */
function draw() {
    background('#FDFDFD');
    textFont("Josefin Sans")
    game.update();
    game.draw();

}


/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
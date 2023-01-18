//---- GLOBAL VARIABLES ----//
// let game: Game;
// let sound: p5.SoundFile
let player: Player;
let menuButton: Button;
let restartButton: Button;
let playerImage: p5.Image;
let images: Images;

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


    images = {
        logo: loadImage("assets/images/logo.svg"),
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
            frostingBig: loadImage("assets/images/frostingBig.svg"),
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
    // noCursor();

    // Move this and change player image 
    player = new Player(images.playerBowl, createVector(width * 0.5, height * .75), createVector(220, 220), createVector(0, 0));

    menuButton = new Button(windowWidth/2 - 182, windowHeight/2 + 150, "Menu", "#C6E3DE", "#23c471");
    restartButton = new Button(windowWidth/2 + 10, windowHeight/2 + 150, "Restart", "#C6E3DE", "#23c471");
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
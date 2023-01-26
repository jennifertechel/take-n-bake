//import p5, { Image } from "p5";

/**
 * This is the Menuscen class. 
 */
class MenuScene {
  private game: IScene;
  private smallFrostingImage: p5.Image;
  private logoImage: p5.Image;
  private sprinklesImage: p5.Image;
  private gameRulesHeading: string;
  private gameRules: string;
  private buttonStartGame: Button;
  private buttonQuitGame: Button;

  constructor(game: IScene) {
    this.game = game;
    this.smallFrostingImage = images.backgroundObjects.frostingSmall;
    this.logoImage = images.logo;
    this.sprinklesImage = images.backgroundObjects.sprinkles;
    this.gameRulesHeading = "Welcome!";
    this.gameRules = `Grandma is in a jam.\nShe doesn’t have the ingredients to bake for her grandkids.\nHelp her catch the right ingredients to complete the recipe.
    But make sure you don’t ruin the cake by \ncatching the wrong ingredient or you will have to start all over.`;
    this.buttonStartGame = new Button (createVector(innerWidth/2-225, 620), "Start", "recipeScene");
    this.buttonQuitGame = new Button (createVector(innerWidth/2+25, 620), "Quit", "startScene");
    
  }
  public update() {
    this.buttonStartGame.update();
    this.buttonQuitGame.update();
  }
  /**
   * Draw the images, buttons and menue-text to this menuescen. 
   */
  public draw() {
    image(this.smallFrostingImage, 0, 0, innerWidth, this.smallFrostingImage.height);
    image(this.logoImage, 50, 0, width/7, height/5);
    image(this.sprinklesImage, width - this.sprinklesImage.width, height - this.sprinklesImage.height );
    fill("#808080");
    textAlign(CENTER);
    textFont("Josefin Sans");
    textSize(40);
    text(this.gameRulesHeading, innerWidth/2-480, innerHeight/2-200, 970, innerWidth/2-480);
    textSize(30);
    textAlign(CENTER);
    text(this.gameRules, innerWidth, innerHeight/2-150, 440);
    this.buttonStartGame.draw();
    this.buttonQuitGame.draw();
    this.buttonStartGame.checkHover();
    this.buttonQuitGame.checkHover();
  }
    
}

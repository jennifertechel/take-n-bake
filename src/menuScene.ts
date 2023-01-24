//import p5, { Image } from "p5";

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
    this.gameRules = "Grandma is in a jam. \nShe doesn’t have the ingredients to bake for her grandkids. \nHelp her catch the right ingredients \nto complete the recipe.";
    this.buttonStartGame = new Button (createVector(innerWidth/2-225, 580), "Start", "recipeScene");
    this.buttonQuitGame = new Button (createVector(innerWidth/2+25, 580), "Quit", "startScene");
    //första värdet vågrätt, andra värdet lodrätt
  }
  public update() {
    this.buttonStartGame.update();
    this.buttonQuitGame.update();
  }

  public draw() {
    image(this.smallFrostingImage, 0, 0, innerWidth, this.smallFrostingImage.height);
    image(this.logoImage, 50, 20, 180, 180);
    image(this.sprinklesImage, width - this.sprinklesImage.width, height - this.sprinklesImage.height );
    fill("#808080");
    textAlign(CENTER);
    textFont("Josefin Sans");
    textSize(40);
    text(this.gameRulesHeading, 970, 300);
    textSize(30);
    textAlign(CENTER);
    text(this.gameRules, 970, 430);
    
    
    this.buttonStartGame.draw();
    this.buttonQuitGame.draw();
    this.buttonStartGame.checkHover();
    this.buttonQuitGame.checkHover();
  }

  //textfärg: 808080
  //font: Josefin Sans
    
}

//lägga till 1 logo ok
//lägga till 1 bakgrundsbild ok
//lägga till strössel ok
//lägga till 2 texter
//lägga till 2 knappar ok
//lägga till hover effekt ok
//lägga till tryckfunktion till nästa scen. 
//import p5, { Image } from "p5";

class MenuScene {
  private game: IScene;
  private bgImage: p5.Image;
  private logoImage: p5.Image;
  private sprinklesImage: p5.Image;
  private buttonStartGame: Button;
  private buttonQuitGame: Button;

  constructor(game: IScene) {
    this.game = game;
    this.bgImage = images.backgroundObjects.frostingSmall;
    this.logoImage = images.logo;
    this.sprinklesImage = images.backgroundObjects.sprinkles;
    this.buttonStartGame = new Button (createVector(innerWidth/2-225, 580), "Start");
    this.buttonQuitGame = new Button (createVector(innerWidth/2+25, 580), "Quit");
    //första värdet vågrätt, andra värdet lodrätt
  }
  public update() {
    
  }

  public draw() {
    image(this.bgImage, 0, 0, innerWidth, this.bgImage.height);
    image(this.logoImage, 50, 150, 100, 100);
    image(this.sprinklesImage, width - this.sprinklesImage.width, height - this.sprinklesImage.height );
    this.buttonStartGame.draw();
    this.buttonQuitGame.draw();
    this.buttonStartGame.checkHover();
    this.buttonQuitGame.checkHover();
  }
    
}

//lägga till 1 logo ok
//lägga till 1 bakgrundsbild ok
//lägga till strössel ok
//lägga till 2 texter
//lägga till 2 knappar ok
//lägga till hover effekt ok
//lägga till tryckfunktion till nästa scen. 
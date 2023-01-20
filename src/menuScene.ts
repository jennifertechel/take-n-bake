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
    this.buttonStartGame = new Button (createVector (250, 250), "Start");
    this.buttonQuitGame = new Button (createVector (200, 200), "Quit");
  }

  public update() {
    
  }

  public draw() {
    image(this.logoImage, 150, 150, 100, 100);
    image(this.bgImage, 0, 0);
    image(this.sprinklesImage, width - this.sprinklesImage.width, height - this.sprinklesImage.height );
    this.buttonStartGame.draw();
    this.buttonQuitGame.draw();
    this.buttonStartGame.checkHover();
    this.buttonQuitGame.checkHover();
  }
    
}

//lägga till 1 logo
//lägga till 1 bakgrundsbild
//lägga till strössel
//lägga till 2 texter
//lägga till 2 knappar
//lägga till hover effekt
//lägga till tryckfunktion till nästa scen. 
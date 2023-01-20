class MenuScene {
  private game: Game;
  private buttonStartGame: Button;
  private buttonQuitGame: Button;

  constructor(game: IScene) {
  
    this.buttonStartGame = new Button (createVector (250, 250), "Start");
    this.buttonQuitGame = new Button (createVector (200, 200), "Quit");
  }

  public update() {
    
  }

  public draw() {
    this.buttonStartGame.draw();
    this.buttonQuitGame.draw();
  }
    
}
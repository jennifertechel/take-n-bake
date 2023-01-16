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
/// <reference path="movingObject.ts" />

class Player extends MovingObject {
    constructor (image: p5.Image, position: p5.Vector, size: p5.Vector, velocity: p5.Vector) {
      super(image, position, size, velocity);
  }

  public handleInput() {
    // make sure the object never goes out of screen
    if (this.position.x < 0 || this.position.x + this.size.x > width) {
      // do not move object if it's at the left or right side of the screen
      this.velocity.x = 0;
      // set the position = constrain(value to constrain, lowest value, highest value)
      this.position.x = constrain(this.position.x, 0, width - this.size.x);
  }

      // handle arrow key input to update the player's velocity
      if (keyIsDown(LEFT_ARROW)) {
          this.velocity.x = -22;
      } else if (keyIsDown(RIGHT_ARROW)) {
          this.velocity.x = 22;
      } else {
          this.velocity.x = 0;
      }
    }
    public getPosition() {
        return this.position
    }
    public getSize() {
        return this.size
    }
}
class MovingObject {
    protected image: p5.Image;
    protected position: p5.Vector;
    protected size: p5.Vector;
    protected velocity: p5.Vector;

    constructor (
        image: p5.Image, 
        position: p5.Vector, 
        size: p5.Vector, 
        velocity: p5.Vector
        ) {
        this.image = image;
        this.position = position;
        this.size = size;
        this.velocity = velocity;
    }

    public update() {
        // update the position of the object based on its velocity
        this.position.add(this.velocity);
    }

    public draw() {
        // draw the object's image on the canvas at its current position
        image(
          this.image, 
          this.position.x, 
          this.position.y, 
          this.size.x, 
          this.size.y
          );
      }
}
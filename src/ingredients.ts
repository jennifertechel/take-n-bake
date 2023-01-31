/// <reference path="movingObject.ts" />
/// <reference path="recipeFactory.ts" />

class Ingredients extends MovingObject {
    protected name: string;

    constructor (
        image: p5.Image, 
        position: p5.Vector, 
        size: p5.Vector, 
        velocity: p5.Vector,
        name: IngredientKey
    ) {
        super(image, position, size, velocity);
        this.name = name;
        this.image = images.ingredients[name];
        this.randomizeStartPosition();
        this.randomizeVelocity();
    }

   public fall() {
        this.position.y += this.velocity.y;
   }
 
   public randomizeStartPosition() {
        this.position = createVector(random(width), -10);
}
   
   public randomizeVelocity() {
        this.velocity = createVector(0, 10);
   }

   public isCollidingWithPlayer(playerPosition: p5.Vector, playerSize: p5.Vector): boolean {
        return this.position.x + this.size.x > playerPosition.x
        && this.position.x < playerPosition.x + playerSize.x
        && this.position.y + this.size.y >= playerPosition.y
        && this.position.y < playerPosition.y;
    }

    public getName(){
        return this.name;
    }

}









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
    }

   public fall() {
        this.position.y += this.velocity.y;
   }
 
    public randomizeStartPosition() {
        this.position = createVector(random(width - this.size.x), -this.size.y);
    }
   
    public setVelocityForLevels(level: number) {
        switch (level) {
        case 1:
        this.velocity = createVector(0, 4);
        break;
        case 2:
        this.velocity = createVector(0, 8);
        break;
        case 3: 
        this.velocity = createVector(0, 12);
    } }

    public isCollidingWithPlayer(playerPosition: p5.Vector, playerSize: p5.Vector): boolean {
        return this.position.x + this.size.x > playerPosition.x
        && this.position.x < playerPosition.x + playerSize.x
        && this.position.y + this.size.y >= playerPosition.y
        && this.position.y < playerPosition.y;
    }
    
    public getName(){
        return this.name;
    }

    public animate(time: number) {
        console.log("in animate")
        const amplitude = 250;
        const frequency = 0.03;
        const elapsedTime = time;
        const angle = elapsedTime * frequency;
        const x = this.position.x + amplitude * Math.cos(angle);
        const y = this.position.y + amplitude * Math.sin(angle) * Math.cos(elapsedTime / 1000);
        this.position.x = x;
        this.position.y = y;
    }

}









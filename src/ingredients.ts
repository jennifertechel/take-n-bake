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
        const ir = this.position.x + this.size.x;
        const il = this.position.x;
        const pr = playerPosition.x + playerSize.x;
        const pl = playerPosition.x;
        const horizontalOverlap = ir > pl && il < pr;
        
        const ib = this.position.y + this.size.y;
        const it = this.position.y;
        const pb = playerPosition.y + playerSize.y;
        const pt = playerPosition.y;
        const verticalOverlap = ib > pt && it < pb;

        const deltaX = Math.min(ir, pr) - Math.max(il, pl);
        const deltaY = Math.min(ib, pb) - Math.max(it, pt);

        return horizontalOverlap && verticalOverlap && deltaY < deltaX && deltaX < playerSize.y/2;
    }
    
    public getName(){
        return this.name;
    }

}









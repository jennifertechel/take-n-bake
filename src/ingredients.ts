/// <reference path="movingObject.ts" />
/// <reference path="recipeFactory.ts" />


class Ingredients extends MovingObject {
    protected name: string;
    private ingredientsTypes: Ingredient[];
    private previousIngredient: IngredientKey | undefined;

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
        this.ingredientsTypes = ["apple", "banana", "blueberry", "butter", "cherry", "chocolate", "egg", "flour", "milk", "strawberry", "sugar"];
        this.previousIngredient = undefined;
        this.randomizeIngredient();
        this.randomizeStartPosition();
        this.randomizeVelocity();
    }

   public fall() {
        this.position.y += this.velocity.y;
   }

   public randomizeIngredient() {
        let ingredient: IngredientKey;
        do {
            ingredient = this.ingredientsTypes[Math.floor(Math.random() * this.ingredientsTypes.length)];
        } while (ingredient === this.previousIngredient);
        this.previousIngredient = ingredient;
        return ingredient;
   }
 
   public randomizeStartPosition() {
        this.position = createVector(random(width), -10);
}
   
   public randomizeVelocity() {
        this.velocity = createVector(0, 2);
}

}









class Ingredients extends movingObject {
    protected ingredients: string[] = [];
    protected name: string;

    constructor (
        image: p5.Image, 
        position: p5.Vector, 
        size: p5.Vector, 
        velocity: p5.Vector,
        name: string,
        ingredients: string[]
    ) {
        super(image, position, size, velocity);
        this.name = name;
        this.ingredients.push(...ingredients);
    }

    addIngredients(ingredient: string[]){
        this.ingredients.push(...ingredient);
    }
}

let ingredients = new Ingredients(image, position, size, velocity, "Banana", ["Apple","Butter"]);
ingredients.addIngredients(["Cherry","Chocolate","Egg","Flour","Milk","Strawberry","Sugar","Blueberry"]);
ingredients.update();
ingredients.draw();


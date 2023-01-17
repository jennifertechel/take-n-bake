class Ingredients {
    protected name: string;
    protected ingredients: string[] = [];

    constructor (
        name: string,
    ){
     
        this.name = name;
    }

    addIngredients(ingredient: string){
        this.ingredients.push(ingredient);
    }
}

let ingredients = new Ingredients('Banana');
ingredients.addIngredients("Apple");
ingredients.addIngredients("Butter");
ingredients.addIngredients("Cherry");
ingredients.addIngredients("Chocolate");
ingredients.addIngredients("Egg");
ingredients.addIngredients("Flour");
ingredients.addIngredients("Milk");
ingredients.addIngredients("Strawberry");
ingredients.addIngredients("Sugar");
ingredients.addIngredients("Blueberry");

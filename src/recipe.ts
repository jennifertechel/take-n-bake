class Recipe {
    private allRecipes: (string[])[] = [];

    constructor() {
        this.pancakeRecipe = ["eggs", "butter", "milk"];
        this.blueberryPieRecipe = ["eggs", "butter", "blueberries", "flour", "sugar"];
        this.chocolateCakeRecipe = ["eggs", "butter", "milk", "flour", "sugar", "chocolate", "strawberries"];

        this.allRecipes.push(this.pancakeRecipe);
        this.allRecipes.push(this.blueberryPieRecipe);
        this.allRecipes.push(this.chocolateCakeRecipe);

    }

    private pancakeRecipe: string[];
    private blueberryPieRecipe: string[];
    private chocolateCakeRecipe: string[];

    private amountIngredients: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    public draw(){
    
    }

}

let recipe = new Recipe();
console.log(recipe);



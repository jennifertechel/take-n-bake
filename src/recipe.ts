class Recipe {
   // private allRecipes: (string[])[] = [];

    constructor() {
        this.pancakeRecipe = ["eggs", "butter", "milk"];
        this.blueberryPieRecipe = ["eggs", "butter", "blueberries", "flour", "sugar"];
        this.chocolateCakeRecipe = ["eggs", "butter", "milk", "flour", "sugar", "chocolate", "strawberries"];

        /*this.allRecipes.push(this.pancakeRecipe);
        this.allRecipes.push(this.blueberryPieRecipe);
        this.allRecipes.push(this.chocolateCakeRecipe);*/

        // ta bort den gemensamma arreyen

    }

    private pancakeRecipe: string[] = ["eggs", "butter", "milk"];
    private pancakeAmount: number[] = [2, 1, 3];

    private blueberryPieRecipe: string[] = ["eggs", "butter", "blueberries", "flour", "sugar"];
    private blueberryPieAmount: number[] = [1, 2, 1, 3, 6];

    private chocolateCakeRecipe: string[] = ["eggs", "butter", "milk", "flour", "sugar", "chocolate", "strawberries"];
    private chocolateCakeAmount: number[] = [3, 1, 5, 3, 2, 3, 4]



    public update() {
        
    }
/*
    public draw() {
        for (let i = 0; i < this.allRecipes.length; i++) {
            let recipe = this.allRecipes[i];
            let amount;
            if (i === 0) {
                amount = this.pancakeAmount;
            } else if (i === 1) {
                amount = this.blueberryPieAmount;
            } else {
                amount = this.chocolateCakeAmount;
            }
            text("Recipe" + (i + 1) + ":");
            for (let j = 0; j < recipe.length; j++) {
                text(recipe[j] + ":" + amount[j]);
            }
        }
    }
    */
    
}


let recipe = new Recipe();

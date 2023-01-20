class Recipe {
    
   private pancakeRecipe: Array <string> [] = [];
   private blueberryPieRecipe: Array <string> [] = [];
   private chocolateCakeRecipe: Array <string> [] = [];
   private text: string

   private ingredientAmount: number[] = [];

    constructor(text: string) {
        this.pancakeRecipe = [];
        this.blueberryPieRecipe = [];
        this.chocolateCakeRecipe = [];
        this.text = text;

    }

    public update() {
        
    }

    public draw() {

        textSize(28);
        textStyle(NORMAL)
        textAlign(CENTER, CENTER)
        text(this.text,this.pancakeRecipe, this.blueberryPieRecipe, this.chocolateCakeRecipe, this.ingredientAmount);
    
    }
}

// försök skapa ett obejekt för varje resept med ingredienser som är koplade till jennifer

let pancakeRecipe = new Recipe("Pancake Recipe");
let blueberryPieRecipe = new Recipe("Blueberry Pie Recipe");
let chocolateCakeRecipe = new Recipe("Chocolate Cake Recipe");


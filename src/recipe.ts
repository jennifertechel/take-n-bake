/// <reference path="recipeFactory.ts" />

class Recipe {
    private ingredients: IIngredientData[];
    private name: string;
    // private image: p5.Image

  constructor(recipe: IRecipeData) {
    this.ingredients = recipe.ingredients;
    this.name = recipe.name;
  } 
  public update() {}
  
  public draw() {
    // Recipe text
    textSize(26);
    textAlign(LEFT, TOP);
    noStroke()
    let yPos = 130; // start position for first line of text
    
    for(let i = 0; i < this.ingredients.length; i++) {
        // check if current ingredient is the last one in the recipe
        if (this.ingredients[i].amount === 0) {
          // this is the last ingredient, change the color
          fill("#c4c4c4");
      } else {
          fill("#808080");
      }
        text(this.ingredients[i].amount + " " + this.ingredients[i].name, 60, yPos + i * 40);
    }

    // Recipe title
    fill('#808080');
    textStyle(BOLD);
    text(this.name, 60, 70);
}

  public getName() {
    return this.name;
  } 

  public getIngredients(): IIngredientData[] {
    return this.ingredients;
  }
}
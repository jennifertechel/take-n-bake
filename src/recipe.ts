/// <reference path="recipeFactory.ts" />

class Recipe {
    private ingredients: IIngredientData[];
    private name: string;

  constructor(recipe: IRecipeData) {
    this.ingredients = recipe.ingredients;
    this.name = recipe.name;
  } 
  public update() {}
  

  public draw() {


  }

  public getName() {
    return this.name;
  } 

  public getIngredients() {
    return this.ingredients;
  }
}
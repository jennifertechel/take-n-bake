/// <reference path="recipeFactory.ts" />

class Recipe {
    private ingredients: IIngredientData[];
    private name: string;

    /**
   * Creates an instance of Recipe.
   * @constructor
   * @param {IRecipeData} recipe - The recipe data.
   */
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
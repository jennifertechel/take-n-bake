class Recipe {
  private ingredients: IIngredientData[];
  private image: p5.Image;
  private name: string;

    /**
   * Creates an instance of Recipe.
   * @constructor
   * @param {IRecipeData} recipe - The recipe data.
   */
  constructor(recipe: IRecipeData) {
    this.ingredients = recipe.ingredients;
    this.image = recipe.image;
    this.name = recipe.name;
  } 

  // byt namn på update till mer konkret, ex reduceIngredient
  public update() {}

  // ritar ut texten 
  public draw() {}
}

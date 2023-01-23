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
  public draw() {
    textSize(20);
    textAlign(LEFT, TOP);
    this.ingredients.forEach((ingredient, index) => {
      text(`${ingredient.amount} ${ingredient.name}`, 10, 10 + (index * 30));
    });
    this.image,
    this.name;
  }
}
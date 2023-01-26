/// <reference path="recipeFactory.ts" />

class Recipe {
    private recipeTitle: string;
    private recipe: string;
    private recipeFactory: RecipeFactory;
    private ingredients: IIngredientData[];
    private image: p5.Image;
    private name: string;

    /**
   * Creates an instance of Recipe.
   * @constructor
   * @param {IRecipeData} recipe - The recipe data.
   */
  constructor(recipe: IRecipeData) {
    this.recipeTitle = "Pancakes";
    this.recipe = "1 sugar \n4 eggs \n3 milk";
    this.recipeFactory = new RecipeFactory();

    this.ingredients = recipe.ingredients;
    this.image = recipe.image;
    this.name = recipe.name;
  } 
  // byt namn på update till mer konkret, ex reduceIngredient
  public update() {}
  
  // public drawRecipe(recipe: Recipe) {
  //   textSize(20);
  //   let currentRecipe = this.recipeFactory.getRecipe(1); // 1 är nivånummer
  //   this.drawRecipe(currentRecipe);
  // }

  public draw() {

    // Recipe text
    textSize(26);
    fill("#A74272");
    textAlign(LEFT, TOP);
    noStroke();
    let recipe = this.recipeFactory.getRecipe(2);
    let yPos = 130; // start position for first line of text

    for(let i = 0; i < recipe.getIngredients().length; i++) {
        text(recipe.getIngredients()[i].amount + " " + recipe.getIngredients()[i].name, 60, yPos+i*40);
    }

    // Recipe title
    textStyle(BOLD);
    text(recipe.getName(), 60, 70);

    textSize(20);
    textAlign(LEFT, TOP);
    // this.ingredients.forEach((ingredient, index) => {
    //   text(`${ingredient.amount} ${ingredient.name}`, 10, 10 + (index * 30));
    // });
    this.image,
    this.name;
  }

  public getName() {
    return this.name;
  } 

  public getIngredients() {
    return this.ingredients;
  }
}
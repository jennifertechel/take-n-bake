type Ingredient = "apple" | "";

interface IIngredientData {
  name: Ingredient;
  amount: number;
}

interface IRecipeData {
  name: string;
  ingredients: IIngredientData[];
  image: p5.Image;
}

class RecipeFactory {
  private recipes: IRecipeData[];

  constructor() {
    this.recipes = [{
      name: "Pancakes",
      image: images.recipes.pancake,
      ingredients: [{
        name: '',
        amount: 2
      }, {
        name: '',
        amount: 2
      }, {
        name: '',
        amount: 2
      }]
    }, {
      name: "Blueberry Pie",
      image: images.recipes.pie,
      ingredients: [{
        name: '',
        amount: 2
      }, {
        name: '',
        amount: 2
      }, {
        name: '',
        amount: 2
      }]
    }]
  }

  public getRecipe(level: number) {
    const recipeData = this.recipes[level - 1];
    return new Recipe(recipeData)
  }

/*  public getIngredient(name: Ingredient) {
    if (name === "apple") {
      return new Ingredient(name, images.ingredients.apple);
    }
  } 
*/
}
type Ingredient = "apple" | "banana" | "blueberry" | "butter" | "cherry" | "chocolate" | "egg" | "flour" | "milk" | "strawberry" | "sugar";

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
        name: 'egg',
        amount: 2
      }, {
        name: 'butter',
        amount: 1
      }, {
        name: 'milk',
        amount: 3
      }]
    }, {
      name: "Blueberry Pie",
      image: images.recipes.pie,
      ingredients: [{
        name: 'egg',
        amount: 1
      }, {
        name: 'sugar',
        amount: 2
      }, {
        name: 'butter',
        amount: 1
      }, {
        name: 'flour',
        amount: 3
      }, {
        name: 'blueberry',
        amount: 4
      }]
    }, {
      name: "Chocolate Cake",
      image: images.recipes.chocolateCake,
      ingredients: [{
        name: 'egg',
        amount: 3
      }, {
        name: 'butter',
        amount: 1
      }, {
        name: 'flour',
        amount: 5
      }, {
        name: 'milk',
        amount: 3
      }, {
        name: 'sugar',
        amount: 2
      }, {
        name: 'chocolate',
        amount: 3
      }, {
        name: 'strawberry',
        amount: 4
      }]
    }]
  }

  public getRecipe(level: number) {
    const recipeData = this.recipes[level - 1];
    return new Recipe(recipeData)
  }


  /*public getIngredient(name: Ingredient) {
    if (name === "apple") {
      return new Ingredients(name, images.ingredients.apple);
    }
  }*/
}
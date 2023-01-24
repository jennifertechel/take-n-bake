/// //<reference path="sketch.ts" />

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

// HEAD
//   public getIngredient(name: Ingredient) {
//      if (name === "apple") {
//     return new Ingredient(name, images.ingredients.apple);
//    }
//    }
// }


  public getIngredient(name: Ingredient) {
    switch (name) {
      case "apple":
        return new Ingredients(images.ingredients.apple, createVector(width * 0.5, height * .1), createVector(120, 120), createVector(0, 0), name)
      case "banana":
        return new Ingredients(images.ingredients.banana, createVector(width * 0.5, height * .1), createVector(120, 120), createVector(0, 0), name)
      case "blueberry":
        return new Ingredients(images.ingredients.blueberry, createVector(width * 0.5, height * .1), createVector(120, 120), createVector(0, 0), name)
      case "butter":
        return new Ingredients(images.ingredients.butter, createVector(width * 0.5, height * .1), createVector(120, 120), createVector(0, 0), name)
      case "cherry":
        return new Ingredients(images.ingredients.cherry, createVector(width * 0.5, height * .1), createVector(120, 120), createVector(0, 0), name)
      case "chocolate":
        return new Ingredients(images.ingredients.chocolate, createVector(width * 0.5, height * .1), createVector(120, 120), createVector(0, 0), name)
      case "egg":
        return new Ingredients(images.ingredients.egg, createVector(width * 0.5, height * .1), createVector(120, 120), createVector(0, 0), name)
      case "flour":
        return new Ingredients(images.ingredients.flour, createVector(width * 0.5, height * .1), createVector(120, 120), createVector(0, 0), name)
      case "milk":
        return new Ingredients(images.ingredients.milk, createVector(width * 0.5, height * .1), createVector(120, 120), createVector(0, 0), name)
      case "strawberry":
        return new Ingredients(images.ingredients.strawberry, createVector(width * 0.5, height * .1), createVector(120, 120), createVector(0, 0), name)
      case "sugar":
        return new Ingredients(images.ingredients.sugar, createVector(width * 0.5, height * .1), createVector(120, 120), createVector(0, 0), name)
    }
  }

}

//const factory = new RecipeFactory;
//const recipe = factory.getRecipe(1)
//console.log(recipe)
//const ingredient = factory.getIngredient('apple')
//console.log(ingredient)



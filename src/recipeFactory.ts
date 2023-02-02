/// <reference path="sketch.ts" />

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
        amount: 0
      }, {
        name: 'butter',
        amount: 0
      }, {
        name: 'milk',
        amount: 0
      }, {
        name: 'flour',
        amount: 1
      }]
    }, {
      name: "Blueberry Pie",
      image: images.recipes.pie,
      ingredients: [{
        name: 'egg',
        amount: 0
      }, {
        name: 'sugar',
        amount: 0
      }, {
        name: 'butter',
        amount: 0
      }, {
        name: 'flour',
        amount: 0
      }, {
        name: 'blueberry',
        amount: 1
      }]
    }, {
      name: "Chocolate Cake",
      image: images.recipes.chocolateCake,
      ingredients: [{
        name: 'egg',
        amount: 0
      }, {
        name: 'butter',
        amount: 0
      }, {
        name: 'flour',
        amount: 0
      }, {
        name: 'milk',
        amount: 0
      }, {
        name: 'sugar',
        amount: 0
      }, {
        name: 'chocolate',
        amount: 1
      }, {
        name: 'strawberry',
        amount: 0
      }]
    }]
  }

  public getRecipe(level: number) {
    const recipeData = this.recipes[level - 1];
    return new Recipe(recipeData)
  }

  public getIngredient(name: Ingredient) {
    switch (name) {
      case "apple":
        return new Ingredients(images.ingredients.apple, createVector(width * 0.5, height * -5), createVector(69, 82), createVector(0, 0), name)
      case "banana":
        return new Ingredients(images.ingredients.banana, createVector(width * 0.5, height * -5), createVector(108, 120), createVector(0, 0), name)
      case "blueberry":
        return new Ingredients(images.ingredients.blueberry, createVector(width * 0.5, height * -5), createVector(69, 75), createVector(0, 0), name)
      case "butter":
        return new Ingredients(images.ingredients.butter, createVector(width * 0.5, height * -5), createVector(118, 90), createVector(0, 0), name)
      case "cherry":
        return new Ingredients(images.ingredients.cherry, createVector(width * 0.5, height * -5), createVector(66, 75), createVector(0, 0), name)
      case "chocolate":
        return new Ingredients(images.ingredients.chocolate, createVector(width * 0.5, height * -5), createVector(125, 135), createVector(0, 0), name)
      case "egg":
        return new Ingredients(images.ingredients.egg, createVector(width * 0.5, height * -5), createVector(56, 75), createVector(0, 0), name)
      case "flour":
        return new Ingredients(images.ingredients.flour, createVector(width * 0.5, height * -5), createVector(138, 150), createVector(0, 0), name)
      case "milk":
        return new Ingredients(images.ingredients.milk, createVector(width * 0.5, height * -5), createVector(59, 165), createVector(0, 0), name)// 54 150
      case "strawberry":
        return new Ingredients(images.ingredients.strawberry, createVector(width * 0.5, height * -5), createVector(59, 75), createVector(0, 0), name)
      case "sugar":
        return new Ingredients(images.ingredients.sugar, createVector(width * 0.5, height * -5), createVector(131, 150), createVector(0, 0), name)
    }
  }

  public getName(level: number) {
    const recipeIndex = level - 1;
    const recipeNames = ['pancake', 'pie', 'Chocolate Cake'];
    const recipeName = recipeNames[recipeIndex];
    return recipeName;
  }


  public getRecipeData(level: number): IRecipeData {
    return this.recipes[level - 1];
  }
}

import { EventEmitter } from '@angular/core';
import { Subject } from "rxjs";

import { Ingredient } from "../../shared/Ingredient.model";

export class ShoppingListService{
  
  // ingredientsChanged = new EventEmitter<Ingredient[]>();
  ingredientsChanged = new Subject<Ingredient[]>();

  ingredients:Ingredient[]=[
        new Ingredient("Apples", 5),
        new Ingredient("Tomatoes", 10)
      ];
    
  getIngredients(){
    return this.ingredients;
  }

  addIngredient(ing: Ingredient){
    this.ingredients.push(ing);
    this.ingredientsChanged.next(this.ingredients);
  }

  addIngFromRecipes(ingredients: Ingredient[]){
    // for(let ingredient of ingredients)
    //   this.ingredients.push(ingredient);

    this.ingredients.push(...ingredients);//spread operator

    this.ingredientsChanged.next(this.ingredients);
  }
}
import { EventEmitter } from '@angular/core';
import { Subject } from "rxjs";

import { Ingredient } from "../../shared/Ingredient.model";

export class ShoppingListService{
  startedEditing = new Subject<number>();

  // ingredientsChanged = new EventEmitter<Ingredient[]>();
  ingredientsChanged = new Subject<Ingredient[]>();

  ingredients:Ingredient[]=[
        new Ingredient("Apples", 5),
        new Ingredient("Tomatoes", 10)
      ];
    
  getIngredients(){
    return this.ingredients;
  }

  getIngredient(index:number){
    return this.ingredients[index];
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

  updateIngrediemt(index:number, updatedIng:Ingredient){
    this.ingredients[index] = updatedIng;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index:number){
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
import { EventEmitter } from '@angular/core';
import { Recipe } from "../../recipes/recipe.model";

export class RecipeService{

  recipeSelected = new EventEmitter<Recipe>();

  recipes : Recipe[]=[
        new Recipe("Chapati", "Fried Chapati", "https://cdn.pixabay.com/photo/2014/10/15/05/05/chapati-489254_960_720.jpg"),
        new Recipe("Paneer", "Palak Paneer", "https://media.istockphoto.com/photos/palak-paneer-at-grey-concrete-background-picture-id1166167732"),
        new Recipe("Pizza", "Margherita", "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg")
      ];
    
    getRecipes(){
      return this.recipes.slice();
    }
}
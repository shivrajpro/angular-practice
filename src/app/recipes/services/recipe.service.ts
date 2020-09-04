import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from "../../recipes/recipe.model";
import { Ingredient } from 'src/app/shared/Ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/services/shopping-list.service';

@Injectable()
export class RecipeService{

  recipeSelected = new EventEmitter<Recipe>();

  recipes : Recipe[]=[
        new Recipe(
            "Chapati",
            "Fried Chapati",
            "https://cdn.pixabay.com/photo/2014/10/15/05/05/chapati-489254_960_720.jpg",
            [
              new Ingredient("Wheat",2),
              new Ingredient("Oil",1)
            ]
          ),

        new Recipe(
            "Paneer",
            "Palak Paneer",
            "https://media.istockphoto.com/photos/palak-paneer-at-grey-concrete-background-picture-id1166167732",
            [
              new Ingredient("Milk",2),
              new Ingredient("Palak",5)
            ]
          ),

        new Recipe(
            "Pizza",
            "Margherita",
            "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg",
            [
              new Ingredient("Maida",4),
              new Ingredient("Tomato",1)
            ]
          )
      ];
    

  constructor(private slService: ShoppingListService){

  }      
  
  getRecipes(){
    return this.recipes.slice();
  }

  addIngToShopList(ingredients: Ingredient[]){
    this.slService.addIngFromRecipes(ingredients);
  }
}
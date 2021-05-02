import { EventEmitter, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { Ingredient } from 'src/app/shared/Ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/services/shopping-list.service';
import { Recipe } from "../../recipes/recipe.model";
import * as ShoppingListActions from "../../shopping-list/store/shoppingList.actions";
import * as fromApp from "../../store/app.reducer";

@Injectable()
export class RecipeService {
  // recipes : Recipe[]=[
  //         new Recipe(
  //           "Chapati",
  //           "Fried Chapati",
  //           "https://cdn.pixabay.com/photo/2014/10/15/05/05/chapati-489254_960_720.jpg",
  //           [
  //             new Ingredient("Wheat",2),
  //               new Ingredient("Oil",1)
  //             ]
  //             ),
  
  //             new Recipe(
  //               "Paneer",
  //               "Palak Paneer",
  //             "https://media.istockphoto.com/photos/palak-paneer-at-grey-concrete-background-picture-id1166167732",
  //             [
  //               new Ingredient("Milk",2),
  //               new Ingredient("Palak",5)
  //             ]
  //             ),
              
  //             new Recipe(
  //               "Pizza",
  //               "Margherita",
  //               "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg",
  //               [
  //                 new Ingredient("Maida",4),
  //                 new Ingredient("Tomato",1)
  //               ]
  //           )
  //         ];

  private recipes: Recipe[] = [];
  recipesChanged = new Subject<Recipe[]>();
  recipeSelected = new EventEmitter<Recipe>();

  constructor(
    private slService: ShoppingListService, 
    private slStore:Store<fromApp.AppState>) {

  }


  getRecipes() {
    return this.recipes.slice();
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;

    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }

  addIngToShopList(ingredients: Ingredient[]) {
    // this.slService.addIngFromRecipes(ingredients);
    this.slStore.dispatch(new ShoppingListActions.AddIngredients(ingredients));
  }

  addRecipe(newRecipe: Recipe) {
    this.recipes.push(newRecipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, updatedRecipe: Recipe) {
    this.recipes[index] = updatedRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-list/services/shopping-list.service';
import { Recipe } from './recipe.model';
import { RecipeService } from './services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  // providers: [RecipeService] data persists only in recipe component and is refreshed everytime the component is loaded
})
export class RecipesComponent implements OnInit {
  selectedRecipe : Recipe;
  
  constructor(private recipeService: RecipeService, private slService: ShoppingListService) { }

  ngOnInit(): void {
    // using service from lazy loaded module in lazy loaded module
    console.log('>>In Recipes from sl service',this.slService.ingredients);

    this.recipeService.recipeSelected.subscribe(
      (recipe)=>{
        this.selectedRecipe = recipe;
      }
    );
  }

}

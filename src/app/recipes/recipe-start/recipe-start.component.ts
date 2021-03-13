import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-start',
  templateUrl: './recipe-start.component.html',
  styleUrls: ['./recipe-start.component.css']
})
export class RecipeStartComponent implements OnInit {
  recipes: Recipe[] = [];
  recipesChangedSub: Subscription;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();

    this.recipesChangedSub = this.recipeService.recipesChanged.subscribe(
      (newRecipes: Recipe[]) => {
        this.recipes = newRecipes;
      }
    );
  }

  ngOnDestroy() {
    this.recipesChangedSub.unsubscribe();
  }

}

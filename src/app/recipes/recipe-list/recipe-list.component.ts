import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Recipe } from "../recipe.model";
// import { RecipeService } from "../../services/recipe.service";
import { RecipeService } from "../services/recipe.service";
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes : Recipe[]=[];
  recipesChangedSub: Subscription;

  // @Output() recipeWasSelected = new EventEmitter<Recipe>();
  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();

    this.recipeService.recipesChanged.subscribe(
      (newRecipes:Recipe[])=>{
        this.recipes = newRecipes;
      }
    );
  }

  onNewRecipe(){
    this.router.navigate(['new',], {relativeTo: this.route});
  }
/*   onRecipeSelected(recipe : Recipe){
    this.recipeWasSelected.emit(recipe);
  }
 */

 ngOnDestroy(){
   this.recipesChangedSub.unsubscribe();
 }
}

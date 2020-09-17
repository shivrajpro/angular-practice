import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, tap } from "rxjs/operators";
import { RecipeService } from '../recipes/services/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {

    constructor(private http: HttpClient, private recipeService: RecipeService) { }

    storeRecipes() {
        const recipes: Recipe[] = this.recipeService.getRecipes();

        if(recipes.length == 0)
            return;

        this.http.
            put("https://ng-course-recipe-book-5ad9f.firebaseio.com/recipes.json", recipes)
            .subscribe(response => {
                console.log(response);
            });
    }

    fetchRecipes() {
        return this.http
            .get<Recipe[]>("https://ng-course-recipe-book-5ad9f.firebaseio.com/recipes.json")
            .pipe(map(recipes => {
                return recipes.map(recipe => {
                    return {
                        ...recipe,
                        ingredients: recipe.ingredients ? recipe.ingredients : []
                    }
                });
            }),
                tap(recipes => {
                    this.recipeService.setRecipes(recipes);
                })
            );
    }
}
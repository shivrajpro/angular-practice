import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { exhaustMap, map, take, tap } from "rxjs/operators";
import { RecipeService } from '../recipes/services/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {
    recipesUrl = "https://ng-course-recipe-book-5ad9f.firebaseio.com/recipes.json";

    constructor(private http: HttpClient,
        private recipeService: RecipeService,
        private authService: AuthService) { }

    storeRecipes() {
        const recipes: Recipe[] = this.recipeService.getRecipes();

        if (recipes.length == 0)
            return;

        this.http.
            put(this.recipesUrl, recipes)
            .subscribe(response => {
                console.log(response);
            });
    }

    fetchRecipes() {
        return this.authService.userChanged
        .pipe(take(1), 
            exhaustMap(user => {
                
            return this.http
                .get<Recipe[]>(this.recipesUrl,
                    {
                        params: new HttpParams().set("auth", user.token)
                    }
                )
            }),
            map(recipes => {
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
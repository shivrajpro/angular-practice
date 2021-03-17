import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { DataStorageService } from "../../services/data-storage.service";
import { Recipe } from "../recipe.model";
import { RecipeService } from './recipe.service';

@Injectable({
    providedIn:'root'
})
/**
 * a code that is run before a route is loaded
 * 
 */
export class RecipeResolverService implements Resolve<Recipe[]>{
    
    constructor(private dsService: DataStorageService, private recipeService: RecipeService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Recipe[] | Observable<Recipe[]> | Promise<Recipe[]> {
        const recipes = this.recipeService.getRecipes();

        if(recipes.length == 0){
            return this.dsService.fetchRecipes();
        }

        return recipes;
    }
}
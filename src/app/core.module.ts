import { NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ShoppingListService } from "./shopping-list/services/shopping-list.service";
import { RecipeService } from "./recipes/services/recipe.service";
import { DataStorageService } from "./services/data-storage.service";
import { AuthService } from "./auth/auth.service";
import { AuthInterceptorService } from "./auth/auth-interceptor.service";


@NgModule({
    providers:[
        ShoppingListService, 
        RecipeService,
        DataStorageService,
        AuthService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptorService,
          multi: true
        }
    ]
})
export class CoreModule{
}
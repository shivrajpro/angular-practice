import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptorService } from "./auth/auth-interceptor.service";
import { AuthComponent } from "./auth/auth.component";
import { AuthService } from "./auth/auth.service";
import { HeaderComponent } from "./header/header.component";
import { RecipesModule } from "./recipes/recipes.module";
import { RecipeService } from './recipes/services/recipe.service';
import { DataStorageService } from "./services/data-storage.service";
import { AlertComponent } from './shared/alert/alert.component';
import { DropDownDirective } from "./shared/drop-down.directive";
import { LoadingSpinnerComponent } from "./shared/loading-spinner/loading-spinner.component";
import { PlaceholderDirective } from "./shared/placeholder/placeholder.directive";
import { ShoppingListService } from "./shopping-list/services/shopping-list.service";
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropDownDirective,
    AuthComponent,
    LoadingSpinnerComponent,
    AlertComponent,
    PlaceholderDirective    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, //to make directives work
    HttpClientModule,
    RecipesModule    
  ],
  providers: [
    ShoppingListService, 
    RecipeService,
    DataStorageService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

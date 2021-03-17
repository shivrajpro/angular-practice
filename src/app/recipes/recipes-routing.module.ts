import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RecipesComponent } from "./recipes.component";
import { AuthGuard } from "../auth/auth-guard.service";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeResolverService } from "./services/recipe-resolver.service";

const routes: Routes = [
    {
        path: '',//coz recipes is present in app-routing.module
        component: RecipesComponent,
        canActivate: [AuthGuard],
        children:[
          {
            path: '',
            component: RecipeStartComponent
          },
          {
            path: 'new',
            component: RecipeEditComponent
          },
          {
            path: ':id',
            component: RecipeDetailComponent,
            resolve: [RecipeResolverService]
          },
          {
            path: ':id/edit',
            component: RecipeEditComponent,
            resolve: [RecipeResolverService]
          }
        ]
      }
]

@NgModule({
    imports:[RouterModule.forChild(routes)], //beacuse we can use forRoot only once.
    //forChild will eventually merge these routes with root
    exports:[RouterModule]
})
export class RecipesRoutingModule{}
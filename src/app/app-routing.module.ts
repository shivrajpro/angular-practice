import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'recipes',
    pathMatch: 'full'// because '' is part of every route
  },
  {
    // if a route is frequently visited in our app then we should 
    //eagerly load such modules
    // we should lazy load only those modules which are not visited often
    path:'recipes',
    // loadChildren:'./recipes/recipes.module#RecipesModule'
    loadChildren: ()=> import('./recipes/recipes.module').then(m=> m.RecipesModule)
  },
  {
    path:'login',
    loadChildren: ()=> import('./auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path: 'shopping-list',
    // component: ShoppingListComponent
    loadChildren: ()=> import('./shopping-list/shopping-list.module').then(m=>m.ShoppingListModule)
  }
];

@NgModule({
  // to optimize lazy loading
  // when use lazy loading, there is a tiny delay  everytime a visit a route
  // to load particular module. to avoid this,
  // setting following property will preload the modules which will be needed later
  // ofcourse the route which is hit first, is loaded first
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

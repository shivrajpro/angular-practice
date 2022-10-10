import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './food-order/cart-page/cart-page.component';
import { FoodPageComponent } from './food-order/food-page/food-page.component';
import { HomeComponent } from './food-order/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'search/:searchItem',
    component: HomeComponent
  },
  {
    path:'tag/:tag',
    component:HomeComponent
  },
  {
    path:'food/:id',
    component: FoodPageComponent
  },
  {
    path:'cart',
    component: CartPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

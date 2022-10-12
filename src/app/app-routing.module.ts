import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailsComponent } from './contact-manager/contact-details/contact-details.component';
import { ContactListComponent } from './contact-manager/contact-list/contact-list.component';
import { ContactManagerComponent } from './contact-manager/contact-manager.component';
import { EditContactComponent } from './contact-manager/edit-contact/edit-contact.component';
import { CartPageComponent } from './food-order/cart-page/cart-page.component';
import { FoodPageComponent } from './food-order/food-page/food-page.component';
import { HomeComponent } from './food-order/home/home.component';
import { LoginComponent } from './restaurant/login/login.component';
import { RestaurantDashboardComponent } from './restaurant/restaurant-dashboard/restaurant-dashboard.component';
import { SignupComponent } from './restaurant/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'contacts',
    pathMatch: 'full'
  },
  {
    path:'contacts',
    component: ContactManagerComponent,
    children:[
      {
        path:'',
        redirectTo:'list',
        pathMatch: 'full'
      },
      {
        path:'list',
        component: ContactListComponent
      },
      {
        path:'new',
        component:EditContactComponent
      },
      {
        path:':id/edit',
        component: EditContactComponent
      },
      {
        path:':id',
        component: ContactDetailsComponent
      }
    ]
  },
  {
    path:'home',
    component:RestaurantDashboardComponent
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
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'signup',
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

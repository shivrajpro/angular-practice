import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './flipkart-cart-clone/products/products.component';
import { CartComponent } from './flipkart-cart-clone/cart/cart.component';
import { QuestionComponent } from './quiz-project/question/question.component';
import { WelcomeComponent } from './quiz-project/welcome/welcome.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TdfComponent } from './tdf/tdf.component';

const routes: Routes = [
  {
    path:'tdf',
    component:TdfComponent
  },
  {
    path:'reactive',
    component:ReactiveFormsComponent
  },
  {
    path:'',
    redirectTo:'products',
    pathMatch:'full'
  },
  // {
  //   path:'welcome',
  //   component:WelcomeComponent
  // },
  // {
  //   path:'question',
  //   component:QuestionComponent
  // }
  {
    path:'products',
    component:ProductsComponent
  },
  {
    path:'cart',
    component:CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

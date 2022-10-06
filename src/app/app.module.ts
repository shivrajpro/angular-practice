import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TdfComponent } from './tdf/tdf.component';
import { AppRoutingModule } from "./app-routing.module";
import { RouteService } from "./services/route.service";
import { WelcomeComponent } from './quiz-project/welcome/welcome.component';
import { QuestionComponent } from './quiz-project/question/question.component';
import { QuestionService } from './services/question.service'
import { HttpClientModule } from '@angular/common/http';
import { ChangeBgDirective } from './directives/change-bg.directive';
import { MaterialModule } from './material/material.module';
import { TodoComponent } from './todo-project/todo/todo.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { FlipkartComponent } from './flipkart-cart-clone/flipkart/flipkart.component';
import { CartComponent } from './flipkart-cart-clone/cart/cart.component';
import { ProductsComponent } from './flipkart-cart-clone/products/products.component';
import { FilterPipe } from './flipkart-cart-clone/pipes/filter.pipe';
import { GoogleStartComponent } from './google-start/google-start.component';
import { MeraBharatComponent } from './mera-bharat/mera-bharat.component';
import { FoodOrderComponent } from './food-order/food-order.component';
import { HeaderComponent } from './food-order/header/header.component';
import { HomeComponent } from './food-order/home/home.component'
@NgModule({
  declarations: [
    AppComponent,
    TdfComponent,
    ReactiveFormsComponent,
    WelcomeComponent,
    QuestionComponent,
    ChangeBgDirective,
    TodoComponent,
    FlipkartComponent,
    CartComponent,
    ProductsComponent,
    FilterPipe,
    GoogleStartComponent,
    MeraBharatComponent,
    FoodOrderComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [RouteService, QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }

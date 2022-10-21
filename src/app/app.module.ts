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
import { HomeComponent } from './food-order/home/home.component';
import { SearchComponent } from './food-order/search/search.component';
import { TagsComponent } from './food-order/tags/tags.component';
import { CartPageComponent } from './food-order/cart-page/cart-page.component';
import { FoodPageComponent } from './food-order/food-page/food-page.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantDashboardComponent } from './restaurant/restaurant-dashboard/restaurant-dashboard.component';
import { LoginComponent } from './restaurant/login/login.component';
import { SignupComponent } from './restaurant/signup/signup.component';
import { ContactManagerComponent } from './contact-manager/contact-manager.component';
import { ContactDetailsComponent } from './contact-manager/contact-details/contact-details.component';
import { EditContactComponent } from './contact-manager/edit-contact/edit-contact.component';
import { ContactListComponent } from './contact-manager/contact-list/contact-list.component';
import { HighlightPipe } from './contact-manager/highlight.pipe'
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
    HomeComponent,
    SearchComponent,
    TagsComponent,
    CartPageComponent,
    FoodPageComponent,
    RestaurantComponent,
    RestaurantDashboardComponent,
    LoginComponent,
    SignupComponent,
    ContactManagerComponent,
    ContactDetailsComponent,
    EditContactComponent,
    ContactListComponent,
    HighlightPipe
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

import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from "@ngrx/store";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from "./core.module";
import { HeaderComponent } from "./header/header.component";
import { LoggingService } from './services/logging.service';
import { SharedModule } from "./shared/shared.module";
import { shoppingListReducer } from "./shopping-list/store/shoppingList.reducer";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    StoreModule.forRoot({shoppingList: shoppingListReducer})
  ],
  bootstrap: [AppComponent],
  // providers:[LoggingService]
})
export class AppModule { }

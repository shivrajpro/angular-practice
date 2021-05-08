import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { SmartComponent } from './demo/smart/smart.component';
import { WrapperComponent } from './demo/wrapper/wrapper.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    WrapperComponent,
    SmartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  // providers:[LoggingService]
})
export class AppModule { }

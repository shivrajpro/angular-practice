import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { SmartComponent } from './demo/smart/smart.component';
import { WrapperComponent } from './demo/wrapper/wrapper.component';
import { UserComponent } from './user/user.component';
import { OperatorsCompnent } from "./operators/operators.component";
import { ParentComponent } from './changedetection/parent/parent.component';
import { Child1Component } from './changedetection/children/child1/child1.component';
import { Child2Component } from './changedetection/children/child2/child2.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    WrapperComponent,
    SmartComponent,
    OperatorsCompnent,
    ParentComponent,
    Child1Component,
    Child2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  // providers:[LoggingService]
})
export class AppModule { }

import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { WrapperComponent } from './demo/wrapper/wrapper.component';
import { SmartComponent } from './demo/smart/smart.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    WrapperComponent,
    SmartComponent
  ],
  imports: [
 
  ],
  bootstrap: [AppComponent],
  // providers:[LoggingService]
})
export class AppModule { }

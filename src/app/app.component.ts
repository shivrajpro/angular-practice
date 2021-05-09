import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { LoggingService } from "./services/logging.service";
import { ShoppingListService } from './shopping-list/services/shopping-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(
    private authService: AuthService,
    private loggingService: LoggingService,
    private slService: ShoppingListService){}

  ngOnInit(){
    this.authService.autoLogin();
    // using service from lazy loaded module in root module
    console.log('>> In APP Cmp from sl service',this.slService.ingredients);
    
    // this.loggingService.printLog('From AppComponent');
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from "./user/user.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  isActivated: boolean = false;

  constructor(private userService: UserService) {}
  
  ngOnInit() {
    this.userService.activatedEmitter.subscribe(
      (didActivate)=>{
        this.isActivated = didActivate;
      });
    }
    
    ngOnDestroy(): void {
      this.userService.activatedEmitter.unsubscribe();
    }
}

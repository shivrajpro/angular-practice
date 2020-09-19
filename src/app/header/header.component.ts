import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../services/data-storage.service';

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
})

export class HeaderComponent implements OnInit, OnDestroy{
    isAuthencticated: boolean = false;
    userSub: Subscription;

    constructor(private dsService: DataStorageService,
                private authService: AuthService){}

    ngOnInit(){
        this.userSub =  this.authService.userChanged.
                        subscribe(user=>{
                            // this.isAuthencticated = user ? true : false;
                            this.isAuthencticated = !!user;
                            // console.log("user = ",user);
                            // console.log("!user = ",!user);
                        });
    }

    onSaveData(){
        this.dsService.storeRecipes();
    }

    onFetchData(){
        this.dsService.fetchRecipes().subscribe();
    }

    ngOnDestroy(){
        this.userSub.unsubscribe();
    }
}
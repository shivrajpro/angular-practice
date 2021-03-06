import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from '@angular/router';
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
                private authService: AuthService,
                private router: Router){}

    ngOnInit(){
        this.userSub =  this.authService.userChanged.
                        subscribe(user=>{
                            // this.isAuthencticated = user ? true : false;
                            this.isAuthencticated = !!user;

                            if (!this.isAuthencticated) {
                                console.log('session expired');
                                this.router.navigateByUrl("/login");
                            }
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

    onLogout(){
        this.authService.logout();
        this.router.navigate(['/login']);
    }

    ngOnDestroy(){
        this.userSub.unsubscribe();
    }
}
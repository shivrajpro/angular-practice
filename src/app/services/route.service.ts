import { Injectable } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RoutesRecognized } from "@angular/router";
import { filter, pairwise } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RouteService {

  previousURL:string = null;

  constructor(private router:Router) {
    this.router.events.pipe(filter((evt: any) => evt instanceof RoutesRecognized), pairwise())
    .subscribe((events: RoutesRecognized[]) => {
      const url = events[0].urlAfterRedirects;
      this.setPreviousUrl(url);
      console.log('>> previous url', events[0].urlAfterRedirects);
      console.log('>> current url', events[1].urlAfterRedirects);
    });

  }

  setPreviousUrl(url){
    this.previousURL = url;
  }

  getPreviousUrl(){
    return this.previousURL;
  }

}

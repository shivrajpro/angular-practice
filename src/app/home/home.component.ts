import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    /* 
      this.firstObSubscription = interval(1000).subscribe(
          (count)=>{
            console.log(count);
          }
        );
    
     */
    const customIntervalObs = Observable.create(
      (observer) => {
        let count = 0;
        setInterval(() => {
          observer.next(count);

          // if (count === 2)
          //   observer.complete();

          if (count > 3)
            observer.error(new Error("Count is greater than 3!"));

          count++;
        }, 1000);
      }
    );

    this.firstObSubscription = customIntervalObs.subscribe((data) => {
      console.log(data);
    }, (error) => {
      console.log(error.message);
    }, () => {
      console.log('Completed!');
    });
  }

  ngOnDestroy() {
    this.firstObSubscription.unsubscribe();
  }

}

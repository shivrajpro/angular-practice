import { Component, OnInit } from "@angular/core";
import { of, Observable, from } from "rxjs";
import { delay, map, filter } from "rxjs/operators";

interface IEmployee {
    id: number,
    username: string,
    email: string
}

@Component({
    selector: 'app-operators',
    templateUrl: './operators.component.html',
    styleUrls: ['./operators.component.scss']
})
export class OperatorsCompnent implements OnInit {
    employees: IEmployee[] = [
        {
            id: 101,
            username: 'abc',
            email: 'abc@gmail.com'
        },
        {
            id: 102,
            username: 'def',
            email: 'def@gmail.com'
        }
    ]

    employeeListObs: Observable<IEmployee[]> = null;

    constructor() { }

    ngOnInit(): void {
        // of([1, 2, 3]).subscribe(x => console.log('>> of', x));
        // would print the whole array at once

        // from([1, 2, 3]).subscribe(x => console.log('>> from', x));
        // prints the elements one by one

        this.employeeListObs = this.getEmployees();

        this.employeeListObs.subscribe(
            (next) => {
                console.log('>> next', next);
            }, (error) => {
                console.log('>> error', error);
            }, () => {
                console.log('>> complete from employee');
            });

        // ============================================================= //
        // https://medium.com/@damianczapiewski/rxjs-merge-vs-mergeall-vs-mergemap-7d8f40fc4756

        // merge : This one is a function that accepts a number of input observables 
        // and returns an observable that emits a value whenever any of the input observable emits.

        // mergeAll : operator to handle a observables that returns observables

        // https://luukgruijs.medium.com/understanding-rxjs-map-mergemap-switchmap-and-concatmap-833fc1fb09ff

        // When you have to deal with an ‘inner’ Observable 

        // mergeMap : combination of merge and mergeAll
        // scenario where we have an Observable that emits an array, 
        // and for each item in the array we need to fetch data from the server.
        // Use mergeMap if you simply want to flatten the data into one Observable.

        // switchMap: you need to flatten the data into one Observable 
        // but only need the latest value

        // concatMap: if you need to flatten the data into one Observable 
        // and the order is important to you

        const ob$: Observable<number> = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).pipe(filter(v => v % 2 === 0), map(v => v * 10));
        // ob$.subscribe(d=>console.log('>> filter and pipe',d))

        const myObs = new Observable(observer => {
            observer.next("custom obs");
            observer.error("from error");
            observer.complete();
        })

        myObs.subscribe((data) => {
            console.log('>> data', data);
        }, (error) => {
            console.log('>> error is', error);
        }, () => console.log('>> custom obs completed')
        )


    }

    getEmployees(): Observable<IEmployee[]> {
        // of() converts the arguments to an observable sequence. used for mocking data
        return of(this.employees).pipe(delay(0));
    }
}
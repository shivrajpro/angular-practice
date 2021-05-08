import { Component, OnInit } from "@angular/core";
import {
    of,
    Observable,
    from,
    forkJoin,
    Subject,
    AsyncSubject,
    ReplaySubject,
    BehaviorSubject
} from "rxjs";

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
        // this.launchDemo1();

        // this.demoBehaviorSubject();

        // this.demoNormalSubject();

        // this.demoReplaySubject();

        // this.demoAsyncSubject();

        // this.promiseAndObs();

        this.demoForkJoin();
    }

    demoForkJoin() {
        const stringObs = of('abc').pipe(delay(2000));
        const numberObs = of(1);

        // order of values is preserved
        forkJoin([stringObs, numberObs]).subscribe((d) => {
            console.log('>> d', d);
        });

        forkJoin({
            forString: stringObs,
            forNumbers: numberObs
        }).subscribe((d) => {
            console.log('>> d', d);
        });

        Promise.all([
            Promise.resolve(3),
            new Promise((resolve, reject) => setTimeout(resolve, 3000, 'foo')),
            42
        ]).then(values => console.log(values));
    }

    promiseAndObs() {
        const myPromise = of([1, 2, 3]).toPromise();

        console.log('>> myPromise', myPromise);
        myPromise.then((d) => {
            console.log('>> Promise', d);
        });

        const obs = from(myPromise);

        obs.subscribe((d) => {
            console.log('>> Observable', d);

        });
    }

    demoAsyncSubject() {
        const asyncSub = new AsyncSubject<string>();

        asyncSub.next('first emit');
        asyncSub.next('second emit');
        asyncSub.next('third emit');
        asyncSub.next('fourth emit');

        asyncSub.subscribe((d) => {
            console.log('>> AAAA', d);
        });

        asyncSub.next('1st emit after 1st subscription');
        asyncSub.next('2nd emit after 1st subscription');
        asyncSub.next('3rd emit after 1st subscription');

        asyncSub.subscribe((d) => {
            console.log('>> BBBB', d);
        });

        asyncSub.next('1st emit after 2nd subscription');
        asyncSub.next('2nd emit after 2nd subscription');
        asyncSub.next('3rd emit after 2nd subscription');

        asyncSub.complete();
    }

    demoReplaySubject() {
        const replaySub = new ReplaySubject(2);

        replaySub.next('first emit');
        replaySub.next('second emit');
        // above data gets printed only if n value is > 1 
        replaySub.next('third emit');

        replaySub.subscribe((d) => {
            console.log('>> AAAA', d);
        });

        replaySub.next('1st emit after first subscription');
        replaySub.next('2nd emit after first subscription');
        replaySub.next('3rd emit after first subscription');

        replaySub.subscribe((d) => {
            console.log('>> BBBB', d);
        });

        replaySub.next('after second subscription');

        replaySub.next('last emit');
    }

    demoNormalSubject() {
        const normalSub = new Subject<string>();

        normalSub.next('before subscribing normal subject');

        normalSub.subscribe((d) => {
            console.log('>> normal subject AAAA', d);
        });

        normalSub.next('after first subscription');

        normalSub.subscribe((d) => {
            console.log('>> normal subject BBBBBB', d);
        });

        normalSub.next('after second subscription');

        normalSub.next('the last emit in normal subject');
    }

    demoBehaviorSubject() {
        const behavSub = new BehaviorSubject<string>('default');

        behavSub.next('first emit');
        behavSub.next('second emit');
        behavSub.next('third emit');

        behavSub.subscribe((d) => {
            console.log('>> BehaviorSubject AAAAA', d);
        });

        behavSub.next('after first subscription');

        behavSub.subscribe((d) => {
            console.log('>> BehaviorSubject BBBBBB', d);
        });

        behavSub.next('after second subscription');
    }

    getEmployees(): Observable<IEmployee[]> {
        // of() converts the arguments to an observable sequence. used for mocking data
        return of(this.employees).pipe(delay(0));
    }

    launchDemo1() {
        of([1, 2, 3]).subscribe(x => console.log('>> of', x));
        // would print the whole array at once

        from([1, 2, 3]).subscribe(x => console.log('>> from', x));
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
}
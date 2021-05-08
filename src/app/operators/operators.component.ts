import { Component, OnInit } from "@angular/core";
import { of, Observable, throwError } from "rxjs";

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
        this.employeeListObs = this.getEmployees();

        this.employeeListObs.subscribe(
            (next) => {
                console.log('>> next', next);
            }, (error) => {
                console.log('>> error', error);
            }, () => {
                console.log('>> complete');
            });
    }

    getEmployees(): Observable<IEmployee[]> {
        // of() converts the arguments to an observable sequence. used for mocking data
        return of(this.employees);
    }
}
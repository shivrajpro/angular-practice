import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  search = new BehaviorSubject<string>("");

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get<any>(`https://fakestoreapi.com/products`)
    .pipe(map((res)=>{
      return res
    }))
  }
}

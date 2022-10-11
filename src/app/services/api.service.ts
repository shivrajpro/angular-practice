import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  getProduct(){
    return this.http.get<any>("https://fakestoreapi.com/products")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  postRestaurant(data){
    return this.http.post('http://localhost:3000/posts', data).pipe(map((res)=>{
      return res;
    }))
  }

  updateRestaurant(data, id){
    return this.http.put('http://localhost:3000/posts/'+id, data).pipe(map((res)=>{
      return res;
    }))
  }

  deleteRestaurant(id){
    return this.http.delete('http://localhost:3000/posts/'+id).pipe(map((res)=>{
      return res;
    }))
  }

  getRestaurant(){
    return this.http.get('http://localhost:3000/posts').pipe(map((res)=>{
      return res;
    }))
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  readonly baseUrl = 'http://localhost:3000/contacts';

  constructor(private http:HttpClient) { }

  getAllContacts(){
    return this.http.get(this.baseUrl).pipe(map((res)=>res));
  }
  
  saveContact(data){
    return this.http.post(this.baseUrl, data).pipe(map((res)=>res));
  }
  
  updateContact(data, id){
    return this.http.put(this.baseUrl+'/'+id, data).pipe(map((res)=>res));
  }

 deleteContact(id){
    return this.http.delete(this.baseUrl+'/'+id).pipe(map((res)=>res));
  }
}

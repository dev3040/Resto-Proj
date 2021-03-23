import { Injectable } from '@angular/core';
import {HttpClient,HttpClientModule,HttpResponse} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url="http://localhost:3000/users"
  constructor(private http:HttpClient) { }
  saveUser(data){
   
    return this.http.post(this.url,data);
    
  }
  getdata(){
    return this.http.get(this.url)
  }
}

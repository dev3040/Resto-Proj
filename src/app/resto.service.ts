import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { Observable,throwError  } from 'rxjs';
import { catchError } from 'rxjs/operators';
// import 'rxjs/add/operator/catch'
@Injectable({
  providedIn: 'root'
})
export class RestoService {
  url="http://localhost:3000/restaurants"
  constructor(private http:HttpClient) {}
  getlist():Observable<any>{
   return  this.http.get(this.url).pipe(catchError(this.errorHander))
  }
  errorHander(error:HttpErrorResponse){
    return throwError(error.message || 'server Error');
  } 
  saveResto(data){
   
    return this.http.post(this.url,data);
    
  }
  deleteResto(id){
    return this.http.delete(`${this.url}/${id}`)
  }
 
  updateRestorunt(id,data){
    return this.http.put(`${this.url}/${id}`,data)
  }
  getById(id){
    return this.http.get(`${this.url}/${id}`)
  }
}





import { AppError } from './../common/app-error';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import {throwError } from 'rxjs';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';
import { Inject } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(@Inject('url') private url: string,private http:HttpClient) { }

  getAll(){
     return this.http.get(this.url).pipe(
      catchError(this.handleError))
   
  }

  create(resource: any){

    return this.http.post(this.url,resource).pipe(
      catchError(this.handleError))

  }

  update(resource: any){
    return this.http.put(this.url+'/'+resource.id,resource).pipe(
      catchError(this.handleError))
  }
  delete(resource: any){
  
    return this.http.delete(this.url+'/'+resource.id).pipe(
      catchError(this.handleError));

  }

  private handleError(error:Response){
    if(error.status===404){

      return throwError(new NotFoundError());
    }
    if(error.status===400){

      return throwError(new BadInput());
    }
        return throwError(new AppError());
       
      } 
  }
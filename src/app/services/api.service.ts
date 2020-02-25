import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( public http: HttpClient) { }

  public getFrase(): Observable<any>{
    return this.http.get("https://api.chucknorris.io/jokes/random");
  }
}

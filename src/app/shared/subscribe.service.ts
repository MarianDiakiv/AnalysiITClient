import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {log} from "util";
const API = 'http://localhost:8080/subscribe1/';
const httpOptiopns = {
  headers: new HttpHeaders({'Content-Type':"application/json"})
};
@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  constructor(private http: HttpClient) {
  }

  subscribe(mail: string, str: string[]): Observable<any> {
    log(mail);
    log(str);
    return this.http.post(API + "" + mail + "", str);
  }


}

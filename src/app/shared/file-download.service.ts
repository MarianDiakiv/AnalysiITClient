import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FileDownloadService {

  constructor(private http:HttpClient) { }
downloadFile(){
const  REQUEST_PARAMS = new HttpParams();
const REQUESR_URI = '//localhost:8080/download';
 return  this.http.get(REQUESR_URI,{
  params:REQUEST_PARAMS,
  responseType:'arraybuffer'
})

}


}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from "rxjs/operators";
import {TablePage} from "../../TablePage";
@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  constructor( private  http:HttpClient) {

  }
  private getPageItems( vacancy:Observable<any>, page:number,ItemsPerPage:number):Observable<TablePage>{

    return vacancy.pipe(
      map(u=>{
        var  startIndex = ItemsPerPage * (page -1);
        return new TablePage(u.length, u.slice(startIndex, startIndex+ItemsPerPage));
      })
    );
  }
  getAll():Observable<any>{
    return this.http.get("//localhost:8080/all");
  }
  getAllPagination(page:number,itemsPerPage:number):Observable<TablePage>{
    var vacancy = this.http.get("//localhost:8080/all");
    return this.getPageItems(vacancy,page,itemsPerPage);
}
  getAllPaginationSelect(vac:Observable<any>, page:number,itemsPerPage:number):Observable<TablePage>{
    // для вибірки паджинатор
    return this.getPageItems(vac,page,itemsPerPage);
  }

  getDou(page:number,itemsPerPage:number):Observable<TablePage>{
    var vacancy =  this.http.get("//localhost:8080/site/dou");
    return this.getPageItems(vacancy,page,itemsPerPage);
  }
  getDjinni(page:number,itemsPerPage:number):Observable<TablePage>{
    var vacancy =  this.http.get("//localhost:8080/site/gjinni");
    return this.getPageItems(vacancy,page,itemsPerPage);
  }

  getbyLanguage(lang:string,page:number,itemsPerPage:number):Observable<TablePage>{
    var vacancy =  this.http.get("//localhost:8080/language/"+lang);
    return this.getPageItems(vacancy,page,itemsPerPage);
  }
  getbyComapny(comp:string,page:number,itemsPerPage:number):Observable<TablePage>{
    var  vacancy = this.http.get("//localhost:8080/company/"+comp);
   return  this.getPageItems(vacancy,page,itemsPerPage);
  }

  getAllLanguage():Observable<any>{
    return this.http.get("//localhost:8080/allLanguage");
  }
  /////////////////////////////////
  getAllCompany():Observable<any>{
    return this.http.get("//localhost:8080/allCompanyName")
  }
  getLanguagebyCompany(company:string):Observable<any>{
    return this.http.get("//localhost:8080/alllanguageByCompany/"+company);
  }
  getPositionByComapnyAndLanguage(company:string, language:string):Observable<any>{
    return this.http.get("//localhost:8080/allPositionByCompanyLanguage/"+company+"/"+language);

  }
  getbyCompanyLanguagePosition( comapny:string , lang:string, position:string, page:number,itemsPerPage:number):Observable<TablePage>{
    var vacancy =  this.http.get("//localhost:8080/allVacancyByCompanyLanguagePosition/"+ comapny+ "/"+ lang+"/"+position);
    return this.getPageItems(vacancy,page,itemsPerPage);
  }

/////////////////////////
  getOne(id:string){
    return this.http.get("//localhost:8080/id/"+id);
  }
  getDouBase():Observable<any>{
    return  this.http.get("//localhost:8080/site/dou");
  }
  getDjinniBase():Observable<any>{
    return this.http.get("//localhost:8080/site/gjinni");
  }

  getbyLanguageBase(lang:string):Observable<any>{

    return this.http.get("//localhost:8080/language/"+lang);
  }
  getbyComapnyBase(comp:string,):Observable<any>{

    return  this.http.get("//localhost:8080/company/"+comp);
  }










  ////////////////////////////////////////////////////////////////////////////
  статистика
  getLanguageStatisticsLast():Observable<any>{
    return this.http.get('//localhost:8080/statictics/nowselected')
  }
  getLanguageSatisticsAll():Observable<any>{
    return this.http.get('//localhost:8080/statistics/all');
  }
  getTopTEnCompany():Observable<any>{
    return this.http.get('//localhost:8080/statistics/top/company');
  }
  getUserSubscribesStatistics():Observable<any>{
    return this.http.get("//localhost:8080/statistics/usersSubscribes");
  }
  getDetailCompanyStatistics(company:string):Observable<any>{
    return this.http.get("//localhost:8080/statistics/CompanyStatisticsOne/"+company);
  }



}

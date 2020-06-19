import { Component, OnInit } from '@angular/core';
import {VacancyService} from "../shared/vacancy/vacancy.service";
import {FormsModule} from "@angular/forms";
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import {Observable, Subscription} from "rxjs";
import {dashCaseToCamelCase} from "@angular/compiler/src/util";
import {TablePage} from "../TablePage";
import {map} from "rxjs/operators";

import {ActivatedRoute, Router} from "@angular/router";



@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrls: ['./language-list.component.css']
})
export class LanguageListComponent implements OnInit {
  public page:number;
  public collectionSize:number;
  public itemsPerPage:number=15;


  public openlanguagelistval = true;
  public sourseBool = true;
  public alllanguages:Array<any>;

  public vacancyList:Observable<any>;

  public vacancy:Array<any>;
  public vacancyPrevious:Array<any>;

  public searchDetailBool=true;
  public languageInputByCompany:string;
  public companyInput:string;
  public companyList:Observable<any>;
  public languageDisable= true;
  public  languageInput:string;
  public positionDisable = true;
  public positionInput:string;
  public positionListByCompanyAndLanguage:Observable<any>;

  public sub:Subscription;

  constructor(private route:ActivatedRoute,
              private router:Router,
              private  vacService:VacancyService) {
    this.page=1;
    // this.pageSize=15;
    this.loadPage();
  }

  ngOnInit() {
    this.vacService.getAllLanguage().subscribe(data=>{
      this.alllanguages = data;

    });
    this.loadCompanyName();

  }
  private loadCompanyName(){
    this.vacService.getAllCompany().subscribe(data=>{
      this.companyList = data;
    })
  }
  public openLanguage(companyInput:string){
    // console.log("sdkhcoisdhciosdhocihsdoiho");
    this.vacService.getLanguagebyCompany(companyInput).subscribe(data=>{
      this.languageInputByCompany = data;
    });
    // console.log("dlancisdhioo");

    this.languageDisable = false;
  }
  public openPosition(companyInput:string, languageInput:string){
    this.vacService.getPositionByComapnyAndLanguage(companyInput,languageInput).subscribe(data=>{
      this.positionListByCompanyAndLanguage = data;
    });
    this.positionDisable = false;
  }
  searchDetailOpen(){
    this.searchDetailBool=!this.searchDetailBool;;
  }
  private loadPage2(){
    this.vacService.getAllPagination(this.page,this.itemsPerPage).subscribe(data=>{
      this.vacancy = data.rows;
      this.collectionSize = data.totalCount;
    });

  }

  private loadPage(){
    this.sub = this.route.params.subscribe(params=>{
      const lang = params.lang;
      if(lang){
        this.vacService.getbyLanguage(lang,this.page,this.itemsPerPage).subscribe(data=>{
          this.vacancy = data.rows;
          this.collectionSize = data.totalCount;
        })
      }
    });


  }
  private loadPageSelected(vacancyM:Observable<any>){
    this.getPageItems(this.vacancyList,this.page,this.itemsPerPage).subscribe(data=>{
      this.vacancy = data.rows;
      this.collectionSize = data.totalCount;
      console.log(data.totalCount)
    });
  }

  private getPageItems( vacancy:Observable<any>, page:number,ItemsPerPage:number):Observable<TablePage>{
    console.log(ItemsPerPage);
    return vacancy.pipe(
      map(u=>{
        var  startIndex = ItemsPerPage * (page -1);
        return new TablePage(u.length, u.slice(startIndex, startIndex+ItemsPerPage));
      })
    );
  }
  onPageChanged(pageNumber){
    console.log("page chanched +"+ pageNumber);
    this.loadPage();
    // this.loadPageSelected(this.vacancyList);
  }



  languagelistopen(){
    this.openlanguagelistval=!this.openlanguagelistval;
  }
  sourseListOpen(){
    this.sourseBool=!this.sourseBool;
  }

  getAllSite(){
    this.vacService.getAllPagination(this.page,this.itemsPerPage).subscribe(data=>{
      this.vacancy = data.rows;
      this.collectionSize = data.totalCount;
      this.page=1;
    });
  }
  getDouSite(){

    this.vacService.getDou(this.page,this.itemsPerPage).subscribe(data=>{
      this.vacancy = data.rows;
      this.collectionSize = data.totalCount;
      this.page=1;
    });
  }
  getDjinniSite(){
    this.vacService.getDjinni(this.page,this.itemsPerPage).subscribe(data=>{
      this.vacancy = data.rows;
      this.collectionSize = data.totalCount;
      this.page=1;
    });
  }


  getByLanguage(lang:string){
    this.vacService.getbyLanguage(lang,this.page,this.itemsPerPage).subscribe(data=>{
      this.vacancy = data.rows;
      this.collectionSize = data.totalCount;
      this.page=1;
    });
  }

  getByComapany(comp:string){
    this.vacService.getbyComapny(comp,this.page,this.itemsPerPage).subscribe(data=>{
      this.vacancy = data.rows;
      this.collectionSize = data.totalCount;
      this.page=1;
    });
  }

  // filter
  getdouThisList(){
    this.vacancyPrevious = this.vacancy;
    this.vacancy = this.vacancy.filter(vac=>vac.site==="dou");
  }
  //filter
  getgjinniThisList(){
    this.vacancyPrevious = this.vacancy;
    this.vacancy = this.vacancy.filter(vac=>vac.site==="gjinni");
  }
  getAllThisList(){
    this.vacancy = this.vacancyPrevious;
  }
/////////////base

  getAllbase(){
    this.vacService.getAll().subscribe(data=>{
      this.vacancyList = data;
    })
  }
  getDouSiteBase(){

    this.vacService.getDouBase().subscribe(data=>{
      this.vacancyList = data;
    });
  }
  getDjinniSiteBase(){
    this.vacService.getDjinniBase().subscribe(data=>{
      this.vacancyList = data;
    });
  }


  getByLanguageBase(lang:string){
    this.vacService.getbyLanguageBase(lang).subscribe(data=>{
      this.vacancyList = data;
    });
  }

  getByComapanyBase(comp:string){
    this.vacService.getbyComapnyBase(comp).subscribe(data=>{
      this.vacancyList = data;
    });
  }

}

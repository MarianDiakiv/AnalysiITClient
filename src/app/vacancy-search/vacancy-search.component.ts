import { Component, OnInit } from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {VacancyService} from "../shared/vacancy/vacancy.service";
import {TablePage} from "../TablePage";
import {map} from "rxjs/operators";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-vacancy-search',
  templateUrl: './vacancy-search.component.html',
  styleUrls: ['./vacancy-search.component.css']
})
export class VacancySearchComponent implements OnInit {
// paginator
  public page:number;
  public collectionSize:number;
  public itemsPerPage:number=15;
  // public pageSize:number;

  public searchDetailBool=true;
  public languageInputByCompany:string;
  public companyInput:string;
  public companyList:Observable<any>;
  public languageDisable= true;
  public  languageInput:string;
  public positionDisable = true;
  public positionInput:string;
  public positionListByCompanyAndLanguage:Observable<any>;



  public openlanguagelistval = true;
  public sourseBool = true;
  public alllanguages:Array<any>;

  public vacancyList:Observable<any>;

  public vacancy:Array<any>;
  public vacancyPrevious:Array<any>;

  public sub:Subscription
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

    // this.loadPageSelected(this.vacancyList);

  }
  private loadCompanyName(){
    this.vacService.getAllCompany().subscribe(data=>{
      this.companyList = data;
    })
  }
  public openLanguage(companyInput:string){
    console.log("sdkhcoisdhciosdhocihsdoiho");
    this.vacService.getLanguagebyCompany(companyInput).subscribe(data=>{
      this.languageInputByCompany = data;
    });
    console.log("dlancisdhioo");

    this.languageDisable = false;
  }
  public openPosition(companyInput:string, languageInput:string){
    this.vacService.getPositionByComapnyAndLanguage(companyInput,languageInput).subscribe(data=>{
      this.positionListByCompanyAndLanguage = data;
    });
    this.positionDisable = false;
  }

  private loadPage(){


    this.sub = this.route.params.subscribe(params=>{
      console.log(this.sub);
      const company = params.company;
      const lang = params.language;
      const position = params.position;
      console.log("cmpany",company, "language",lang,"position ",position);

      // if(company){
        this.vacService.getbyCompanyLanguagePosition(company,lang,position,this.page,this.itemsPerPage).subscribe(data=>{
          this.vacancy = data.rows;
          this.collectionSize = data.totalCount;
          // console.log("SIZE",this.collectionSize);
        })
      // }
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

  // private loadPageSelected(vacancyM:Observable<any>){
  //   this.getPageItems(this.vacancyList,this.page,this.itemsPerPage).subscribe(data=>{
  //     this.vacancy = data.rows;
  //     this.collectionSize = data.totalCount;
  //     console.log(data.totalCount)
  //   });
  // }

  // private getPageItems( vacancy:Observable<any>, page:number,ItemsPerPage:number):Observable<TablePage>{
  //   console.log(ItemsPerPage);
  //   return vacancy.pipe(
  //     map(u=>{
  //       var  startIndex = ItemsPerPage * (page -1);
  //       return new TablePage(u.length, u.slice(startIndex, startIndex+ItemsPerPage));
  //     })
  //   );
  // }
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
  searchDetailOpen(){
    this.searchDetailBool=!this.searchDetailBool;;
  }

  // getAllSite(){
  //   this.vacService.getAllPagination(this.page,this.itemsPerPage).subscribe(data=>{
  //     this.vacancy = data.rows;
  //     this.collectionSize = data.totalCount;
  //     this.page=1;
  //   });
  // }
  // getDouSite(){
  //
  //   this.vacService.getDou(this.page,this.itemsPerPage).subscribe(data=>{
  //     this.vacancy = data.rows;
  //     this.collectionSize = data.totalCount;
  //     this.page=1;
  //   });
  // }
  // getDjinniSite(){
  //   this.vacService.getDjinni(this.page,this.itemsPerPage).subscribe(data=>{
  //     this.vacancy = data.rows;
  //     this.collectionSize = data.totalCount;
  //     this.page=1;
  //   });
  // }


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

}

import { Component, OnInit } from '@angular/core';
import {VacancyService} from "../shared/vacancy/vacancy.service";
import {Observable} from "rxjs";
import {FileDownloadService} from "../shared/file-download.service";
import {saveAs} from 'file-saver';
import {dashCaseToCamelCase} from "@angular/compiler/src/util";
import {log} from "util";
import {CompanyVacancyPositionCount} from "../models/CompanyVacancyPositionCount";
@Component({
  selector: 'app-vacancy-statistics',
  templateUrl: './vacancy-statistics.component.html',
  styleUrls: ['./vacancy-statistics.component.css']
})
export class VacancyStatisticsComponent implements OnInit {
  public languageSelectedBoolean=true;
  public languageSelectedList:Observable<any>;
  public allStatistisc:Observable<any>;
  public allLanguage:Observable<any>;
  public topCompany:Observable<any>;
  public userSubscribes:Observable<any>;
  public  companyName:string;

  public companyDetailInfoObj:CompanyVacancyPositionCount;
  public companyDetailInfoL:Observable<any>;
  public languageStatisticBool:Boolean=true;
  public languageStatisticSelectedBool:Boolean=true;
  public companyStatisticBool:Boolean=true;
  public subscribeStatisticsOpen:Boolean=true;
  public detailCompanyOpenBool=true;

  constructor(private vacService:VacancyService, private fileService:FileDownloadService) { }

  ngOnInit() {
    this.languageStatisticBool = false;

  this.vacService.getLanguageStatisticsLast().subscribe(data=>{
    this.languageSelectedList = data;
  });
    this.vacService.getLanguageSatisticsAll().subscribe(data=>{
      this.allStatistisc = data;
    });

    this.vacService.getAllLanguage().subscribe(data=>{
      this.allLanguage = data;
    });

  // top company
    this.vacService.getTopTEnCompany().subscribe(data=>{
      this.topCompany = data;
    });

    this.vacService.getUserSubscribesStatistics().subscribe(data=>{
      this.userSubscribes = data;
    });
  }
  // download  file
  downloadFile(){
    this.fileService.downloadFile()
      .subscribe(data=>{
        //save in client
        saveAs(new Blob([data],{type:'application/pdf'}));
      })
  }
  companyDetailInfo(){
    log(this.companyName);
    // this.vacService.getDetailCompanyStatistics(this.companyName).subscribe(data=>{
    //   this.companyDetailInfoObj = data;
    //   // this.companyDetailInfoObj.
    // });
    this.vacService.getDetailCompanyStatistics(this.companyName).subscribe(data=>{
      this.companyDetailInfoL = data;
      // this.companyDetailInfoObj.
    });
  }

  languageStatisticOpen(){
    this.languageStatisticBool=false;
    this.languageStatisticSelectedBool = true;
    this.companyStatisticBool = true;
    this.subscribeStatisticsOpen =true;
    this.detailCompanyOpenBool = true;
  }
  languageStatisticSelectedOpen(){
    this.languageStatisticSelectedBool=false;
    this.languageStatisticBool = true;
    this.companyStatisticBool = true;
    this.subscribeStatisticsOpen = true;
    this.detailCompanyOpenBool = true;
  }
  companyStatisticOpen(){
    this.companyStatisticBool = false;
    this.languageStatisticSelectedBool = true;
    this.languageStatisticBool = true;
    this.subscribeStatisticsOpen = true;
    this.detailCompanyOpenBool = true;
  }
  subscribeStatisticOpen(){
    this.subscribeStatisticsOpen = false;
    this.languageStatisticBool=true;
    this.languageStatisticSelectedBool = true;
    this.companyStatisticBool = true;
    this.detailCompanyOpenBool = true;
  }
  detailCompanyOpen(){
    this.detailCompanyOpenBool = false;
    this.subscribeStatisticsOpen = true;
    this.languageStatisticBool=true;
    this.languageStatisticSelectedBool = true;
    this.companyStatisticBool = true;
  }






}

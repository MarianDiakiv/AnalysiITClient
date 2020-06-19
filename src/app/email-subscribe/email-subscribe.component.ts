import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {VacancyService} from "../shared/vacancy/vacancy.service";
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {log} from "util";
import {SubscribeService} from "../shared/subscribe.service";
import {dateComparator} from "@ng-bootstrap/ng-bootstrap/datepicker/datepicker-tools";

@Component({
  selector: 'app-email-subscribe',
  templateUrl: './email-subscribe.component.html',
  styleUrls: ['./email-subscribe.component.css']
})
export class EmailSubscribeComponent implements OnInit {
  //Ng models
  mail:string;
  addJava:Boolean;
  addNET:Boolean;
  addPHP:Boolean;
  addCpp:Boolean;
  addJavaScript:Boolean;
  addPython:Boolean;
  addRuby:Boolean;
  addAndroid:Boolean;
  addDataScience:Boolean;
  addGoland:Boolean;
  addIOS:Boolean;
  addQA:Boolean;
  addProjectManager:Boolean;

  langMail:string;
  public emailCansel:string;
  language:Observable<any>;
  langsForMail:string[]=[];
  public openlanguagelistval = true;
  public  cancelHiden = true;
  constructor( private vacService:VacancyService, private subsService:SubscribeService, private http:HttpClient ) { }

  ngOnInit() {
    this.vacService.getAllLanguage().subscribe(data=>{
      this.language = data;
    })
  }
  save(){
    if (this.addJava===true){
      // log("JAVA");
      // this.langsForMail.push()
      this.langsForMail.push('Java');
      log(this.langsForMail);
    }
    if(this.addNET===true){
      this.langsForMail.push('.NET');
      log(this.langsForMail);
    }
    if (this.addPHP===true){
      this.langsForMail.push('PHP');
      log(this.langsForMail);
    }

    if (this.addCpp===true){
      this.langsForMail.push('C++');
      log(this.langsForMail);
    }

    if (this.addJavaScript===true){
      this.langsForMail.push('Java Script');
      log(this.langsForMail);
    }

    if (this.addPython===true){
      this.langsForMail.push('Python');
      log(this.langsForMail);

    }if (this.addRuby===true){
      this.langsForMail.push('Ruby');
      log(this.langsForMail);
    }

    if (this.addAndroid===true){
      this.langsForMail.push('Android');
      log(this.langsForMail);
    }

    if (this.addDataScience===true){
      this.langsForMail.push('Data Science');
      log(this.langsForMail);
    }
    if (this.addGoland===true){
      this.langsForMail.push('Goland');
      log(this.langsForMail);
    }
    if (this.addIOS===true){
      this.langsForMail.push('IOS');
      log(this.langsForMail);
    }
    if (this.addQA===true){
      this.langsForMail.push('QA');
      log(this.langsForMail);
    }

    if (this.addProjectManager===true){
      this.langsForMail.push('Project Manager');
      log(this.langsForMail);
    }


// this.subsService.subscribe(this.mail,this.langsForMail);
    this.http.post("//localhost:8080/subscribe/"+this.mail,this.langsForMail).subscribe(data=>{
      log(data);
    });
    alert("Відправлено");
    window.location.reload();

  }

  languagelistopen(){
    this.openlanguagelistval=!this.openlanguagelistval;
  }
  canselSubscribe(){
    this.cancelHiden=!this.cancelHiden;
  }
  public action:any
  cancel(){
    this.http.post("//localhost:8080/canselsubscribe",this.emailCansel).subscribe(data=>{
      log(data);
      alert(data);
       // this.action = this.action = JSON.stringify(data);
    });
     // alert(this.action);
    window.location.reload();
    // this.canserSubscribePost().subscribe(data=>{
    //   this.action = data.toString();
    // });
    //
    // alert(this.action);

  }
  // canserSubscribePost():Observable<any>{
  //   var temp = this.http.post("//localhost:8080/canselsubscribe",this.emailCansel);
  //   return temp;
  // }

}

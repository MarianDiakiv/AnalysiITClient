import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {VacancyService} from "../shared/vacancy/vacancy.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-vacancy-details',
  templateUrl: './vacancy-details.component.html',
  styleUrls: ['./vacancy-details.component.css']
})
export class VacancyDetailsComponent implements OnInit {
  vacancy: any={};
  sub:Subscription;
  constructor(private route:ActivatedRoute,
              private router:Router,
              private vacService:VacancyService) { }

  ngOnInit() {
    this.sub=this.route.params.subscribe(params=>{
      const id = params.id;
      if(id){
        this.vacService.getOne(id).subscribe((vacancy:any)=>{
          if (vacancy){
            this.vacancy = vacancy;
            //console.log(vacancy.vacancyDetails.listDetails.toString())
          } else {
            console.log('Vacancy id not found ');
            this.gotoList();
          }
        });
      }
    });
  }
  gotoList(){
    this.router.navigate(['/vacancy-list'])
  }

}

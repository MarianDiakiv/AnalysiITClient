import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VacancyListComponent} from "./vacancy-list/vacancy-list.component";
import {VacancyDetailsComponent} from "./vacancy-details/vacancy-details.component";
import {VacancyStatisticsComponent} from "./vacancy-statistics/vacancy-statistics.component";
import {LanguageListComponent} from "./language-list/language-list.component";
import {SiteListComponent} from "./site-list/site-list.component";
import {EmailSubscribeComponent} from "./email-subscribe/email-subscribe.component";
import {VacancySearchComponent} from "./vacancy-search/vacancy-search.component";

const routes: Routes = [
  {path:'',redirectTo:'/vacancy-list',pathMatch:'full'},
  {path:'vacancy-list', component:VacancyListComponent},
  {path:'vacancy-details/:id', component:VacancyDetailsComponent},
  {path:'vacancy-statistics',component: VacancyStatisticsComponent},
  {path:'language-list/:lang',component:LanguageListComponent },
  {path:'sites-list/:site',component:SiteListComponent},
  {path:'email-subscribe',component:EmailSubscribeComponent},
  {path:'vacancy-search/:company/:language/:position', component:VacancySearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

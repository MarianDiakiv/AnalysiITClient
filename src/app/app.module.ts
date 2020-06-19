import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HttpClientModule } from '@angular/common/http';
import { VacancyListComponent } from './vacancy-list/vacancy-list.component';
import { VacancyDetailsComponent } from './vacancy-details/vacancy-details.component';
import {FormsModule} from "@angular/forms";

import {NgbModule}  from "@ng-bootstrap/ng-bootstrap";// bootstrap
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { NavPanelComponent } from './nav-panel/nav-panel.component';
import { VacancyStatisticsComponent } from './vacancy-statistics/vacancy-statistics.component';
import { FooterComponent } from './footer/footer.component';
import { LanguageListComponent } from './language-list/language-list.component';
import { SiteListComponent } from './site-list/site-list.component';
import { EmailSubscribeComponent } from './email-subscribe/email-subscribe.component';
import { VacancySearchComponent } from './vacancy-search/vacancy-search.component';



@NgModule({
  declarations: [
    AppComponent,
    VacancyListComponent,
    VacancyDetailsComponent,
    NavPanelComponent,
    VacancyStatisticsComponent,
    FooterComponent,
    LanguageListComponent,
    SiteListComponent,
    EmailSubscribeComponent,
    VacancySearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NgbModule,// bootstrap
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

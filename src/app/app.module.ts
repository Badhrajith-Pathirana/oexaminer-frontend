import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {  HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ExamdetailsComponent } from './examdetails/examdetails.component';
import { AppRoutingModule } from './app-routing.module';
import { SidebarNavComponent } from './sidebar-nav/sidebar-nav.component';
import { StdDashboardComponent } from './std-dashboard/std-dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FootarComponent } from './footar/footar.component';
import { LecDashboardComponent } from './lec-dashboard/lec-dashboard.component';
import { QuestionComponent } from './question/question.component';
import { ExamManageComponent } from './exam-manage/exam-manage.component';


@NgModule({
  declarations: [
    AppComponent,
    ExamdetailsComponent,
    SidebarNavComponent,
    StdDashboardComponent,
    HeaderComponent,
    FootarComponent,
    LecDashboardComponent,
    QuestionComponent,
    ExamManageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);

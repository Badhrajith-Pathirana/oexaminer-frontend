import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExamdetailsComponent } from './examdetails/examdetails.component';
import { AppRoutingModule } from './app-routing.module';
import { SidebarNavComponent } from './sidebar-nav/sidebar-nav.component';
import { StdDashboardComponent } from './std-dashboard/std-dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FootarComponent } from './footar/footar.component';
import { LecDashboardComponent } from './lec-dashboard/lec-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    ExamdetailsComponent,
    SidebarNavComponent,
    StdDashboardComponent,
    HeaderComponent,
    FootarComponent,
    LecDashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExamdetailsComponent } from './examdetails/examdetails.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateLoginComponent } from './create-login/create-login.component';
import { CreateSignupComponent } from './create-signup/create-signup.component';


@NgModule({
  declarations: [
    AppComponent,
    ExamdetailsComponent,
    CreateLoginComponent,
    CreateSignupComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

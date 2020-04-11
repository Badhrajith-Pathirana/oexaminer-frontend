import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExamdetailsComponent } from './examdetails/examdetails.component';
import { AppRoutingModule } from './app-routing.module';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    ExamdetailsComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

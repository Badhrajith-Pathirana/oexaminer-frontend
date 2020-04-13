import { ExamdetailsComponent } from './examdetails/examdetails.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateLoginComponent } from './create-login/create-login.component';

const routes: Routes = [
  { path: 'CreateExam', component: ExamdetailsComponent },
  { path: 'Login', component: CreateLoginComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { QuestionComponent } from './question/question.component';
import { StdDashboardComponent } from './std-dashboard/std-dashboard.component';
import { LecDashboardComponent } from './lec-dashboard/lec-dashboard.component';
import { ExamdetailsComponent } from './examdetails/examdetails.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ExamManageComponent } from './exam-manage/exam-manage.component';
import { ExamViewComponent } from './exam-view/exam-view.component';

const routes: Routes = [
  { path: 'CreateExam', component: ExamdetailsComponent },
  { path: 'LecturerDashboard', component: LecDashboardComponent },
  { path: 'StudentDashboard', component: StdDashboardComponent },
  { path: 'CreateQuestion', component: QuestionComponent },
  { path: 'ExamManage', component: ExamManageComponent },
  { path: 'ExamView', component: ExamViewComponent }
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

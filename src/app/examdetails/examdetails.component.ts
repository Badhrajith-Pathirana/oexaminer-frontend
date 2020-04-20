import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Exam } from '../dto/exam';
import { ExamService } from '../service/exam.service';
import { ExamTemp } from '../dto/examtemp';
import { Module } from '../dto/module';

@Component({
  selector: 'app-examdetails',
  templateUrl: './examdetails.component.html',
  styleUrls: ['./examdetails.component.css']
})
export class ExamdetailsComponent implements OnInit {

  exams: Array<ExamTemp> = [];
  exam: ExamTemp= new ExamTemp('','','','','','');
  modules: Module[] = [
    {id:1,module:"Java"},
    {id:2,module:"JavaScript"},
    {id:3,module:"Angular"},
    {id:4,module:"Ruby"},
    {id:5,module:"Python"},
  ];

  constructor(private examService:ExamService) { }

  ngOnInit() {
    console.log("Yoooo");
  }

  saveExam1(exForm: NgForm): void{
    console.log(exForm.value);
  }

  saveExam():void{
      this.exams.push(this.exam);
      console.log("done");
      // this.examService.saveExam(this.exam).subscribe(id=>{
      //   alert(id);
      // },
      // error=>{
      //   console.log(error);
      // })
      // this.exam = new Exam('','','','','','');
  }

}

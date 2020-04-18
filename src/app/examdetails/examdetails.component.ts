import { Module } from './../models/module.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-examdetails',
  templateUrl: './examdetails.component.html',
  styleUrls: ['./examdetails.component.css']
})
export class ExamdetailsComponent implements OnInit {

  modules: Module[] = [
    {id:1, name:'Java'},
    {id:2, name:'NodeJS'},
    {id:3, name:'Angular'},
    {id:4, name:'Javascript'},
    {id:5, name:'Python'},
    {id:6, name:'Ruby'},
    {id:7, name:'Swift'}
  ]

  // exam={

  // }

  constructor(
      // private config:ConfigService
      
  ) { }

  ngOnInit() {
    // this.exam = this.getExam();
    console.log(this.modules);
  }

  // getExam(){
  //   return this.config.getConfig().exam;
  // }

  saveExam(exForm: NgForm): void{
    console.log(exForm.value);
  }

}

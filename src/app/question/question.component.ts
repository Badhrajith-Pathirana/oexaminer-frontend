import { Component, OnInit } from '@angular/core';
import { Question } from '../dto/question';
import { ExamService } from '../service/exam.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  answerList: any [] =  [{
    id: 'Test1',
    value: 'TestingOne'
  }, {
    id: 'Test2',
    value: 'TestingTwo'
  }];
  questions: Question[];
  question:Question = new Question('',['','','',''],'');
  answers: String[4];
  qtn: string;
  otn1: string;
  otn2: string;
  otn3: string;
  otn4: string;
  answer: string;

  constructor(private examService:ExamService) { }

  ngOnInit() {
  }
  saveQuestion():void{
    this.questions.push(this.question);
    
}

}

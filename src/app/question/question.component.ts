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

  constructor(private examService:ExamService) { }

  ngOnInit() {
  }

}

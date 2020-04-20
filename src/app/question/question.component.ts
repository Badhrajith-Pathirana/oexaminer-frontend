import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}

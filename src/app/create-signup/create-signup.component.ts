import { Component, OnInit } from '@angular/core';
import { User } from '../service/user.model';

@Component({
  selector: 'app-create-signup',
  templateUrl: './create-signup.component.html',
  styleUrls: ['./create-signup.component.css']
})
export class CreateSignupComponent implements OnInit {

  user: User;
  constructor() { }

  ngOnInit() {
  }

  submitHandler(SignupForm){
    console.log(SignupForm);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsernameValidator } from './username.validator';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

form=new FormGroup({
  username:new FormControl('',[
    Validators.required,
    Validators.minLength(3),
    UsernameValidator.cannotContainSpace
  ]),
  password:new FormControl()
})

get username() {
  return this.form.get("username");
}
get password() {
  return this.form.get("password");
}

}

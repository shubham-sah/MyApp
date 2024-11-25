import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/Types/Auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: LoginForm = {
    email: '',
    password: '',
  };

  inputemail: string = '';
  inputpassword: string = '';
  isFormSubmitted: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  submit() {
    this.isFormSubmitted = true;
    this.inputemail = this.form.email;
    this.inputpassword = this.form.password;
  }

  reset() {
    this.form = {
      email: '',
      password: '',
    };
    this.isFormSubmitted = false;
    this.inputemail = '';
    this.inputpassword = '';
  }
}

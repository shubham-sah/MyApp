import { Component, OnInit } from '@angular/core';
import { RegisterForm } from 'src/app/Types/Auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: RegisterForm = {
    email: '',
    password: '',
    confirm_password: '',
  };

  passwordMatched: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  submit() {
    //this.authService.register(this.form);
  }

  isLoading() {
    return null;
    // return this.authService.isLoading;
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Login } from 'src/app/model/login.model';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup; 

  constructor() { 
    this.loginForm = this.setupLoginForm();
  }

  ngOnInit(): void {
  }
  
  setupLoginForm(): FormGroup<any> {
    return new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }

  onSubmit(): void {
    console.log(this.loginForm.value);
  }

}

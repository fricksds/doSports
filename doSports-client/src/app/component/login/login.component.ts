import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/model/login.model';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private login: Login = new Login();

  constructor() { }

  ngOnInit(): void {
  }

}

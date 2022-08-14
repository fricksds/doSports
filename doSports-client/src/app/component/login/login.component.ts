import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login/login.service';
import { SnackBarComponentComponent } from '../utilities/snack-bar-component/snack-bar-component.component';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup('');

  constructor(private fb: FormBuilder,
    private loginService: LoginService,
    private router:Router,
    private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.setupLoginForm();
  }

  setupLoginForm(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.compose([Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,16}$')])],
    });
  }

  onSubmit(): void {
    this.loginService.authentication(this.loginForm.value)?.subscribe({
      next: (response) => {
        if(response) {
          this.router.navigate(['/apHome']);
        } else {
          console.log('Loggin fail');
          this.snackBar.openFromComponent(SnackBarComponentComponent, {
            duration: 500000,
          });
        }
      }, error: (error) => {
        console.log('Error => ', error);
      }
    });
  }
}

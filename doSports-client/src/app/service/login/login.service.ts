import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpConfig } from 'src/app/config/http/http.config';
import { Login } from 'src/app/model/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private PATHNAME = 'login'

  constructor(private httpConfig: HttpConfig) { }

  public authentication(login: Login): Observable<Boolean> | null {
    return this.httpConfig.post(this.PATHNAME, login);
  }
}

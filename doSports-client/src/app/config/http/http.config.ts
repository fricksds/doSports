import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpConfig {
  private host: string = 'http://localhost:8090/';

  constructor(private httpClient: HttpClient) { }

  public get(pathname: string): Observable<Object> {
    const url = this.host + pathname;
    return this.httpClient.get(url);
  }

  
  public post(pathname: string, body: Object): Observable<any> {
    const url = this.host + pathname;
    return this.httpClient.post(url, body);
  }
}

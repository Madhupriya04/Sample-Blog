import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class AuthService { public actionUrl: string;
  public name = '';
  public is_login: Boolean = false;

  constructor(public _http: Http) {
    this.actionUrl = 'http://localhost:3000/profile/';
    this.is_login = false;
  }

  login(username: string, password: string) {
    return this._http.post(this.actionUrl, { username: username, password: password })
        .map(user => { 
          return user.json();
        });
}

logout() {
     localStorage.removeItem('currentUser');
}

}
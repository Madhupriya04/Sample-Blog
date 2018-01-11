import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class AuthService {
    public actionUrl: string;

  constructor(public _http: Http) {
    this.actionUrl = 'http://localhost:3000/profile/';
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
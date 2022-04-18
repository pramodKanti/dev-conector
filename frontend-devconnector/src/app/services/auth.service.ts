import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated = new BehaviorSubject<boolean>(false);
  

  token: string;

  constructor() {
    this.token = JSON.parse(localStorage.getItem('token'));
    this.isauthenticated();
  }

  setToken(token: string) {
    localStorage.setItem('token', JSON.stringify(token));
    this.isauthenticated();
  }

  getToken(): string {
    return JSON.parse(localStorage.getItem('token'));
  }

  isauthenticated() {
    if (localStorage.getItem('token')) {
      this.isAuthenticated.next(true);
    } else {
      this.isAuthenticated.next(false);
    }
  }

  logout() {
    this.isauthenticated();
  }
}

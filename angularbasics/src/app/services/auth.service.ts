import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loggedIn:boolean=false;

  toggleLogin()
  {
    this.loggedIn=!this.loggedIn
  }

  isAuthenticated()
  {
    return this.loggedIn
  }
}

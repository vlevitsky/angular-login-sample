import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';

const styles   = require('./login.css');
const template = require('./login.html');

@Component({
  selector: 'login',
  template: template,
  styles: [ styles ]
})

export class Login {
  loginResult: string = '';

  constructor(public router: Router, public http: Http) {
  }

  login(event, username, password) {
    event.preventDefault();
    let body = JSON.stringify({ username, password });

    let requestInit : RequestInit = {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json' },
        body,
    };
    fetch('http://localhost:8080/api/v1/auth/login', requestInit)
      .then(response => {
          if (response.ok) {
            this.loginResult = 'Login Success';
          } else {
            this.loginResult = 'Login failure. Invalid password';
          }
          this.router.navigate(['']);
      })
      .catch(error => {
        this.loginResult = 'Login failure. Service unavailable';
      });
  }
}

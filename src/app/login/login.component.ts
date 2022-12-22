import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  passwordText?: string;

  constructor(private readonly _router: Router) { }

  ngOnInit(): void {
  }

  checkPassword(): boolean {
    if(this.passwordText === "StarWars1977"){
      this._router.navigate(['/diamond']);
      return true;
    }
    alert("Access DENIED! Incorrect password.");
    return false;
  }

}


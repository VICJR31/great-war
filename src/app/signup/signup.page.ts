import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  username: string
  email: string
  password: string
  powers: string

  constructor() { }

  ngOnInit() {
  }

  register() {
    let user = {
      username: this.username,
      email: this.email,
      password: this.password,
      powers: this.powers
    }
  }

  signup() {
    console.log("I have been clicked!");
  }
}

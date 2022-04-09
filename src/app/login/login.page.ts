import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;


  constructor(
    private fb?: FormBuilder, 
    private httpClient?: HttpClient,
    private router?: Router,
    private activatedRoute?: ActivatedRoute
    ) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }  

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    console.log(this.loginForm.value);
    // return this.httpClient.post('http://localhost:3000/api/users', createBody);
    const url = 'http://localhost:3000/api/auth';
    this.httpClient.post(url, this.loginForm.value)
      .subscribe((result) => {
        console.log(result)
        // Note(3/18/22): Enter error on Google after entering inputs on signup
        
        //this.ngOnInit();
      })
    // this.modalService.dismissAll();
  }
}

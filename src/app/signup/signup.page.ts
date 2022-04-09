import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  // username: string;
  // email: string;
  // password: string;
  // powers: string
  recruitForm: FormGroup;

  loginUrl = '';
  // httpClient: any;

  constructor(
    private fb?: FormBuilder, 
    private httpClient?: HttpClient,
    private router?: Router,
    private activatedRoute?: ActivatedRoute
    ) { }

  ngOnInit() {
    this.initializeForm();
    this.loginUrl = this.activatedRoute.snapshot.queryParamMap.get('returnto') || 'profile';
    console.log(this.loginUrl);
  }

  initializeForm(): void {
    this.recruitForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get name() {
    return this.recruitForm.get('name');
  }

  get email() {
    return this.recruitForm.get('email');
  }

  get password() {
    return this.recruitForm.get('password');
  }

  // onSubmit(): void {
  //   console.log(this.recruitForm.value);
  // }

  onSubmit() {
    console.log(this.recruitForm.value);
    // return this.httpClient.post('http://localhost:3000/api/users', createBody);
    const url = 'http://localhost:3000/api/users';
    this.httpClient.post(url, this.recruitForm.value)
      .subscribe((result) => {
        console.log(result)
        // Note(3/18/22): Enter error on Google after entering inputs on signup
        
        //this.ngOnInit();
      })
      localStorage.setItem('authenticated', '1');
      this.router.navigateByUrl(this.loginUrl)
    // this.modalService.dismissAll();
  }
}

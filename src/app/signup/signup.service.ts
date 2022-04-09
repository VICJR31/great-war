import { HttpClient } from  '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  // private url = 'mongodb://localhost/vidly2';

  constructor(private http: HttpClient) { }

  getPosts() {
    // return this.http.get(this.url);
  }
}

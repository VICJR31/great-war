import { Injectable } from '@angular/core';
// (10/8/21) Still getting 'Cannot GET /' after npm angular
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class FireserviceService {

  constructor(
    public firestore: AngularFirestore,
    public auth: AngularFireAuth
  ) { }
}

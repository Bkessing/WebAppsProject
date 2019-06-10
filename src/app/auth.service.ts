import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth
  ) { }

  register(data) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
      .then(res => {
        resolve(res);
      }, err => reject(err))
    })
  } 

  login(data) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(data.email, data.password)
      .then(res => {
        resolve(res);
      }, err => reject(err))
    })
  }

  logout() {
    return new Promise((resolve, reject) => {
      if(firebase.auth().currentUser) {
        this.afAuth.auth.signOut();
        resolve();
      } else {
        reject();
      }
    })
  }
}

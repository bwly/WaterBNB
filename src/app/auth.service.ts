import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: Observable<firebase.User> = null;
  private userDetails: firebase.User = null;
  private loggedIn = false;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.user = afAuth.authState;

    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
        } else {
          this.userDetails = null;
        }
      }
    );
  }

  checkUser() {
    return this.loggedIn;
  }

  doRegister(value, name) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
        .then(res => {
          res.user.updateProfile({
            displayName: name
          });
          resolve(res);
        }, err => reject(err));
    });
  }

  getUserName() {
    return firebase.auth().currentUser.displayName;
  }

  getUserUid() {
    return firebase.auth().currentUser.uid;
  }

  doLogin(value) {
  return new Promise<any>((resolve, reject) => {
    firebase.auth().signInWithEmailAndPassword(value.email, value.password)
    .then(res => {
        this.loggedIn = true;
        resolve(res);
      }, err => {
        reject(err);
      });
    });
  }

  get currentUserObservable(): any {
    return this.afAuth.auth;
  }

  get authenticated(): boolean {
    return this.userDetails !== null;
  }

  doLogout() {
    return new Promise((resolve, reject) => {
      if (firebase.auth().currentUser) {
        this.afAuth.auth.signOut();
        this.loggedIn = false;
        resolve();
      } else {
        reject();
      }
    });
  }
}

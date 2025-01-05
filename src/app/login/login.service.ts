import { Injectable } from '@angular/core';
import { Router } from '@angular/router';// to redirect after login
import { FirebaseApp, initializeApp } from "firebase/app"; // to authenticate in firebase
// import { AngularFireAuth } from 'firebase/auth';
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  auth;
  app;
  token;
  logged: boolean = false;

  constructor(private router: Router, private cookie: CookieService) {
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyDCdX3yxT17InhY_F2L0EQH7Bake3FQqZI",
      authDomain: "myfirstangular-c52e8.firebaseapp.com",
      databaseURL: "https://myfirstangular-c52e8-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "myfirstangular-c52e8",
      storageBucket: "myfirstangular-c52e8.firebasestorage.app",
      messagingSenderId: "1024909636336",
      appId: "1:1024909636336:web:366532f1dd97b5057c8835"
    };

    // Initialize Firebase
    this.app = initializeApp(firebaseConfig);

    // Initialize Firebase Authentication and get a reference to the service
    this.auth = getAuth(this.app);

  }

  login(email: string, password: string) {
    signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        this.token = user.getIdToken();
        console.log(this.token);
        // save in cookie
        this.cookie.set("token", this.token);
        this.logged = true;
        this.cookie.set("status", String(this.logged));
        // ...
        this.router.navigateByUrl('/home');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Error login");
      });
  }

  logout() {
    signOut(this.auth)
      .then(() => {
        // Signed out 
        this.logged = false;
        this.token = "";
        // destroy cookies
        this.cookie.deleteAll();
        // go to login page
        this.router.navigateByUrl('/login');
        // reload web
        window.location.reload();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Error logout");
      });
  }

  islogged() {
    // return this.logged;
    const status = this.cookie.get("status");
    return this.logged = status === "true";
  }
}

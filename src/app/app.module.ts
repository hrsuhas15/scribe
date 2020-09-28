import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import * as firebase from 'firebase/app'
import 'firebase/auth'

import { AppComponent } from './app.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { SignupComponent } from './signup/signup.component';

var firebaseConfig = {
  apiKey: "AIzaSyD_YoBijAHFeW26lFMz7BaVcRq4PRXq0cs",
  authDomain: "scribe-8517d.firebaseapp.com",
  databaseURL: "https://scribe-8517d.firebaseio.com",
  projectId: "scribe-8517d",
  storageBucket: "scribe-8517d.appspot.com",
  messagingSenderId: "827338191457",
  appId: "1:827338191457:web:9ad740aaf0d9a7b7fc3020",
  measurementId: "G-PM7MZVKCNV"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

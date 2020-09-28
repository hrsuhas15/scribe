import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import * as firebase from 'firebase/app'
import 'firebase/auth'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  myForm: FormGroup;
  message: string="";
  userError: any;

  constructor(public fb:FormBuilder) {
   
    this.myForm=this.fb.group({
      firstName: ['',[Validators.required]],
      lastName: ['',[Validators.required]],
      email: ['',[Validators.required]],
      password: ['',[Validators.required,Validators.minLength(8)]],
    })

   }

  ngOnInit(): void {
  }

  onSubmit(form)
  {
   console.log(form.value);

   firebase.auth().createUserWithEmailAndPassword(form.value.email, form.value.password).then((response) => {
    console.log(response);
    alert("Your account has been created!");
    this.message="Your accout has been created";
    let randomNum= Math.floor(Math.random()*1000);
    response.user.updateProfile({
      displayName: form.value.firstName+" "+form.value.lastName,
      photoURL: "https://api.adorable.io/avatars/"+ randomNum
    }).then(function() {

      console.log("Update successful");
    }).catch(function(error) {
      console.log("An error happened")
    });
  }).catch((error) => {
    console.log(error);
    alert(error.message);
    this.userError=error.message;
  })
  this.message="";
  }
}

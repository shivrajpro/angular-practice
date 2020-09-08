import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signUpForm: NgForm;
  defaultQue = "teacher"; //one way binded
  answer = '';
  genders = ['Male', "Female"];

  submitted:boolean = false;

  user = {
    username:'',
    email:'',
    secretQuestion:'',
    questionAnswer:'',
    gender:''
  };

  suggestUserName() {
    const suggestedName = 'Superuser';
/* 
    this.signUpForm.form.setValue({
      userData:{
        username:suggestedName,
        email:''
      },
      secret:'teacher',
      questionAns:'',
      gender:'Male'
    });

 */    
    this.signUpForm.form.patchValue({
      userData:{
        username:suggestedName
      }
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit(){
    this.submitted = true;
    console.log(this.signUpForm.form.value);

    let signUpFormValues = this.signUpForm.form.value;
    this.user.username = signUpFormValues.userData.username,
    this.user.email = signUpFormValues.userData.email;
    this.user.secretQuestion = signUpFormValues.secret;
    this.user.questionAnswer = signUpFormValues.questionAns;
    this.user.gender = signUpFormValues.gender;

    this.signUpForm.form.reset(); //can pass the object as well
  }
}

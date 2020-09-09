import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  forbiddenUsernames = ["Chris", "Anna"];
  signUpForm: FormGroup;
  validatingEmailMsg = "";

  ngOnInit(){
    this.signUpForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.checkForbiddenUsernames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.checkForbiddenEmails)
      }),
      'gender': new FormControl("male"),
      'hobbies': new FormArray([])
    });
/* 
    this.signUpForm.valueChanges.subscribe(
      (value)=>{
        console.log(value);
      }
    );

 */    
    this.signUpForm.statusChanges.subscribe(
      (status)=>{
        console.log(status);
        this.validatingEmailMsg = status;
      }
    );
  }

  onSubmit(){
    console.log(this.signUpForm);
  }

  onAddHobby(){
    const control = new FormControl(null, Validators.required);

    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }

  getControls() {
    return (<FormArray>this.signUpForm.get('hobbies')).controls;
  }

  checkForbiddenUsernames(control: FormControl): {[s:string]: boolean}{

    if(this.forbiddenUsernames.indexOf(control.value) != -1)
      return {'userNameIsForbidden': true};

    return null;
  }


  //Asynchronoues validator
  checkForbiddenEmails(control: FormControl): Promise<any> | Observable<any>{
    const promise = new Promise<any>((resolve, reject)=>{
      setTimeout(() => {
        if(control.value == "test@test.com")
          return resolve({"emailIsForbidden":true});
        return resolve(null);
      }, 3000);
    });

    return promise;
  }
}

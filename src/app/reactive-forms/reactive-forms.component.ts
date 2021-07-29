import { Component, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NavigationEnd, Router, RoutesRecognized } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, pairwise } from "rxjs/operators";
import { RouteService } from "../services/route.service";

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],
})
export class ReactiveFormsComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Chris', 'Anna'];
  projectForm: FormGroup;
  projectStatusList: string[] = ['Critical', 'Stable', 'Finished'];

  constructor(private fb: FormBuilder, private routerService: RouteService) {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.forbiddenNames.bind(this),
        ]),
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          this.forbiddenEmails
        ),
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([]),
    });
    // gets invoked when any form control is changed
    // this.signupForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // );

    // gets invoked when status of the form (valid,invalid,pending,dirty,touched,pristine) is changed
    // this.signupForm.statusChanges.subscribe(
    //   (status) => console.log(status)
    // );

    // to initialize the entire form
    // this.signupForm.setValue({
    //   'userData': {
    //     'username': 'Max',
    //     'email': 'max@test.com'
    //   },
    //   'gender': 'male',
    //   'hobbies': []
    // });

    // to set certain controls in the form
    // this.signupForm.patchValue({
    //   'userData': {
    //     'username': 'Anna',
    //   }
    // });

    this.projectForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      projectStatus: this.fb.group({
        status: [''],
      }),
    });

    // console.log('>> in reactive',routerService.getPreviousUrl());
    
  }

  ngOnInit(): void {}

  statusChange(e) {
    console.log('>> evt', e);
    this.projectForm
      .get('projectStatus')
      .get('status')
      .setValue(e.target.value);
  }

  // onSubmit() {
  //   if(this.projectForm.invalid){
  //     this.projectForm.markAllAsTouched();
  //     this.showValidationMsg(this.projectForm);
  //   }
  //   console.log('>> ', this.projectForm);
  // }

  showValidationMsg(formGroup: FormGroup) {
    return;
    for (const key in formGroup.controls) {
      if (formGroup.controls.hasOwnProperty(key)) {
        const control: FormControl = <FormControl>formGroup.controls[key];

        if (Object.keys(control).includes('controls')) {
          const formGroupChild: FormGroup = <FormGroup>formGroup.controls[key];
          this.showValidationMsg(formGroupChild);
        }

        control.markAsTouched();
      }
    }
  }

  getControls() {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }

  onSubmit() {
    this.signupForm.markAllAsTouched();
    console.log('>> ', this.signupForm);
    // this.signupForm.reset();
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({ emailIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}

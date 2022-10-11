import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(private router:Router, private fb: FormBuilder, private apiService: ApiService) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      email:[],
      password:[]
    })
  }

  onSignUp(){
    this.apiService.signUp(this.signUpForm.value).subscribe((response)=>{
      console.log('on sign up',response);
      this.router.navigate(['/login']);
    })
  }

}

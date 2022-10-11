import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private router:Router, private fb: FormBuilder, private apiService: ApiService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:[],
      password:[]
    })
  }

  onLogin(){
    this.apiService.login().subscribe((response:any)=>{
      console.log('on sign up',response);
      const {email, password} = this.loginForm.value;

      const user = response.find((r)=>r.email == email && r.password == password);

      if(user){
        this.router.navigate(['/home']);
      }else{
        alert("User not found")
        this.router.navigate(['/signup']);
      }
    })
  }
}

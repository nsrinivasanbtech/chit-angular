import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router) { }

  loginForm = this.fb.group({
    MobileNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^[0-9]\d*$/)]],
    password: ['']
  });

  get MobileNumber(): any { return this.loginForm.get('MobileNumber'); }

  ngOnInit(): void {
  }

  loginMe = () => {
    // alert(this.loginForm.controls.username.value);
    // alert(this.loginForm.controls.password.value);
    if (this.loginForm.valid) {
      localStorage.setItem('token', 'true');
      this.router.navigate(['/dashboard']);
    }
      //  else {
    //   alert('Please enter your mobile number');
    //   // alert('U-name: admin, pwd: admin@123');
    // }
  }
}

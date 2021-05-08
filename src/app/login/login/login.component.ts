import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private _authService: AuthService, private router: Router) { }

  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  ngOnInit(): void {
  }

  onSubmit() {
    this._authService.login(this.loginForm.value).subscribe((res:any)=>{
      if(res.isSuccess){
        localStorage.setItem('token', res.responseData.token);
        localStorage.setItem('userId', res.responseData.userId);
        localStorage.setItem('isSuperAdmin', res.responseData.isSuperAdmin);
        this.router.navigateByUrl('/items');
      }else{
        alert(res.message);
      }
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, private _authService: AuthService, private router: Router) { }

  signUpForm = this.fb.group({
    email: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: [''],
    password: ['',  [
      Validators.required,
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
     ]],
  });
  get email() { return this.signUpForm.get('email'); }
  get firstName() { return this.signUpForm.get('firstName'); }
  get lastName() { return this.signUpForm.get('lastName'); }
  get password() { return this.signUpForm.get('password'); }

  ngOnInit(): void {
  }

  onSubmit() {
    this._authService.SignUp(this.signUpForm.value).subscribe((res:any)=>{
      debugger;
      if(res.isSuccess){
        this.router.navigateByUrl('/');
      }
    })
  }

}

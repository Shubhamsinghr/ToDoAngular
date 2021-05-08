import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardService } from './services/authguard.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private _authguardservice: AuthguardService, private router: Router) {} 
  canActivate(): boolean {
    if (!this._authguardservice.gettoken()) {  
      this.router.navigateByUrl("/");  
  }  
  return this._authguardservice.gettoken();  
  }
  
}

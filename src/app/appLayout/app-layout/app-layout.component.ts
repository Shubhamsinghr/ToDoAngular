import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthguardService } from '../../services/authguard.service';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css']
})
export class AppLayoutComponent implements OnInit {

  showLogout:boolean = false;
  isSuperAdmin:boolean = false;
  constructor(private router: Router, private _authguardservice: AuthguardService) { }

  ngOnInit(){
    if (this._authguardservice.gettoken()) {  
      this.showLogout = true;  
    } 
    if(localStorage.getItem("isSuperAdmin")=="true"){
      this.isSuperAdmin = true;
    }
  }
  logout(){
    localStorage.clear();
    this.router.navigateByUrl('/');
  }

  users(){
    this.router.navigateByUrl('/users');
  }

  roles(){
    this.router.navigateByUrl('/roles');
  }
  item(){
    this.router.navigateByUrl('/items');
  }

}

import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  constructor(private _userService: UserService, private modalService: NgbModal, private fb: FormBuilder) { }
  roles: [];
  IsAdd: boolean = false;
  Addform: FormGroup;
  get roleName() { return this.Addform.get('roleName'); }
  ngOnInit(): void {
    this.Addform = this.fb.group({
      roleName: ['', Validators.required],
    });
    this.getRoles();
  }

  getRoles() {
    this._userService.getRoles().subscribe((res: any) => {
      if (res.isSuccess) {
        this.roles = res.responseData;
      }
    })
  }
  
  addRole(){
    this._userService.addRole(this.Addform.value.roleName).subscribe((res:any)=>{
      if (res.isSuccess) {
        debugger;
        this.Addform.reset();
        this.getRoles();
      }
    });
  }

}

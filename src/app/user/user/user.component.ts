import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private _userService: UserService, private modalService: NgbModal, private fb: FormBuilder) { }
  users:[];
  form:FormGroup;
  selectedUserId = '';
  get roleName() { return this.form.get('roleName'); }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this._userService.getUsers().subscribe((res: any) => {
      if(res.isSuccess){
        this.users = res.responseData;
      }
    })
  }

  openRolePopup(content, model) {
    this.selectedUserId = model.id;
    this.form = this.fb.group({
      roleName: ['', Validators.required],
    });
    this.modalService.open(content, { size: 'lg' });
  }

  assignRole(){
    let obj = {'userId':this.selectedUserId, 'roleName': this.form.value.roleName};
    this._userService.assignRole(obj).subscribe((res: any) => {
      if(res.isSuccess){
        this.form.reset();
        this.modalService.dismissAll();
      }else{
        this.form.reset();
        alert(res.message);
        this.modalService.dismissAll();
      }
    })
  }

}

import { getTranslationDeclStmts } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(private _itemService: ItemService, private modalService: NgbModal, private fb: FormBuilder) { }
  items = [];
  selectedItem: any;
  IsAdd: boolean = false;
  IsEdit: boolean = false;
  Addform: FormGroup;
  form: FormGroup;
  model = { 'title': '', 'description': '' };
  modalReference: NgbModalRef;

  ngOnInit(): void {
    this.Addform = this.fb.group({
      title: ['', Validators.required],
      description: [''],
    });
    this.getItems();
  }

  get title() { return this.Addform.get('title'); }
  get description() { return this.Addform.get('description'); }
  get updatedtitle() { return this.form.get('updatedtitle'); }
  get updateddescription() { return this.form.get('updateddescription'); }

  getItems() {
    debugger;
    this.items=[];
    this._itemService.getItems().subscribe((res: any) => {
      this.items = res;
    })
  }

  openPopup(contentAdd, isAdd) {
    this.IsAdd = isAdd;
  }

  additem() {
    this.model.title = this.Addform.value.title;
    this.model.description = this.Addform.value.description;
    this.upsertItem(this.model);
  }

  openEditPopup(content, IsEdit, model) {
    this.IsEdit = IsEdit;
    this.form = this.fb.group({
      updatedtitle: [model.title, Validators.required],
      updateddescription: [model.description],
    });
    this.selectedItem = model;
    this.modalService.open(content, { size: 'lg' });
  }

  updateitem() {
    this.selectedItem.title = this.form.value.updatedtitle;
    this.selectedItem.description = this.form.value.updateddescription;
    this.upsertItem(this.selectedItem);
  }

  upsertItem(model: any) {
     this._itemService.upsertItem(model).subscribe((res:any)=>{
      if(res.isSuccess){
        this.getItems();
        this.Addform.reset();
        this.IsAdd = false;
        this.IsEdit = false;
        this.modalService.dismissAll();
      }
    })
  }
}

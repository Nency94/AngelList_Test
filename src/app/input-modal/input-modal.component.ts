import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-input-modal',
  templateUrl: './input-modal.component.html',
  styleUrls: ['./input-modal.component.scss']
})
export class InputModalComponent implements OnInit {
  @Output() LoadList = new EventEmitter<boolean>();
  type: any;
  modal: any = {
    title: "",
    desc: "",
    file: ""
  };
  error: any;
  display: boolean = false;
  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit() {
  }

  onChange(event) {
    if(!event.srcElement.file){
      return;
    }
    if(this.type == 'picture'){
      event.srcElement.file.type == 'type'
    }
    this.modal.file = event.srcElement.files;
    console.log(this.modal.file);
  }

  submit() {
    this.error = "";
    switch (this.type) {
      case 'text':
        if (!this.modal.desc) {
          this.error = "please enter Description";
        }
        break;

      case 'article':
        if (!this.modal.desc && !this.modal.title) {
          this.error = "Please fill All the values";
        }
        break;

      case 'document':
      case 'picture':
        if (!this.modal.desc && !this.modal.title && !this.modal.file) {
          this.error = "Please fill All the values";
        }
        break;
    }

    if (!this.error) {
      let list = [];
      list = this.localStorageService.get(this.type) || [];
      console.log(list, 'list');
      list.push(this.modal);
      this.localStorageService.set(this.type, list);
      this.LoadList.emit();
      this._hideForm();
      this.modal = {};
    }
    console.log('submit');
  }

  _hideForm() {
    this.display = false;
  }

  _showForm() {
    this.display = true;
  }
}

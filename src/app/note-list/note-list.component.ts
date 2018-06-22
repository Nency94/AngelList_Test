import { Component, OnInit, Input } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {
  _type: string = 'text';
  list: any = [];
  view: any = 'List';

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.getList();
  }

  getList(){
    this.list = [];
    this.list = this.localStorageService.get(this._type);
  }

  setview(value){
    this.view = value;
  }

}

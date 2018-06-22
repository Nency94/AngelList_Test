import { Component, ViewChild } from '@angular/core';
import { NoteListComponent } from './note-list/note-list.component';
import { InputModalComponent } from './input-modal/input-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild(NoteListComponent)
  private listDisplay: NoteListComponent;

  @ViewChild(InputModalComponent)
  private InputForm: InputModalComponent;
  view: any = 'List';
  type: string = 'text';

  ngOnInit() {
    this.listDisplay.setview(this.view);
  }

  _listStyle(value) {
    this.view = value;
    this.listDisplay.setview(value);
  }

  openForm(value) {
    this.InputForm.type = value;
    this.InputForm._showForm();
  }

  onListLoad(e) {
    this.listDisplay._type = this.type;
    this.listDisplay.getList();
  }

  LoadList(value) {
    this.type = value;
    this.onListLoad(null);
  }
}

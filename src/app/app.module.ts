import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//imports 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputModalComponent } from './input-modal/input-modal.component';
import { NoteListComponent } from './note-list/note-list.component';
import { LocalStorageModule } from 'angular-2-local-storage';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InputModalComponent,
    NoteListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LocalStorageModule.withConfig({
      prefix: 'MyApp',
      storageType: 'localStorage'
    }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

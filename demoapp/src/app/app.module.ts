import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { Demo1Component } from './demo1/demo1.component';
import { DemoComponent } from './demo/demo.component';
import { TodoComponent } from './todo/todo.component';
import { StudentappComponent } from './studentapp/studentapp.component';
import { ProdComponent } from './prod/prod.component';
import { EmpdemoComponent } from './empdemo/empdemo.component';

@NgModule({
  declarations: [
    AppComponent,
    Demo1Component,
    DemoComponent,
    TodoComponent,
    StudentappComponent,
    ProdComponent,
    EmpdemoComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

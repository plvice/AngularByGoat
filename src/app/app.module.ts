import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TaskService } from './services/task.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TodoListComponent } from './components/todolist/todolist.component';
import { AddFormComponent } from './components/addform/addform.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoListComponent,
    AddFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }

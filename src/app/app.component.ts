import { Component, ViewChild } from '@angular/core';
import { TodoListComponent } from './components/todolist/todolist.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    @ViewChild(TodoListComponent) TodoListComponent : TodoListComponent

    constructor() {
      
    }

    reset() {
      this.TodoListComponent.initTaskList();
    }

    ngAfterViewInit() {
      console.log(this.TodoListComponent);
    }

}

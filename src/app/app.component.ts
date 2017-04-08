import { Component, ViewChild } from '@angular/core';
import { Task } from './app.task';
import { TaskService } from './services/task.service';
import { TodoListComponent } from './components/todolist/todolist.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    @ViewChild(TodoListComponent) TodoListComponent : TodoListComponent
    taskList: Array<Task>;

    constructor(private taskService: TaskService) {
      this.taskList = this.taskService.getDefaultTaskList();
    }

    reset() {
      let data = this.taskService.getDefaultTaskList();
      this.TodoListComponent.initTaskList(data);
    }

    ngAfterViewInit() {

    }

}

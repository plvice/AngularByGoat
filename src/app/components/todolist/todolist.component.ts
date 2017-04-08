import { Component, OnInit } from '@angular/core';
import { Task } from '../../app.task';
import { TaskService } from '../../services/task.service';

@Component({
    selector: 'todolist',
    templateUrl: 'todolist.component.html'
})

export class TodoListComponent implements OnInit {
    taskList: Array<Task>;

    constructor(private taskService: TaskService) {
        let initialData = taskService.getDefaultTaskList();
        this.initTaskList(initialData);
    }

    initTaskList(tasks: Array<Task>) {
        this.taskList = [];
        this.addDefaultTasks(tasks);
    }

    addDefaultTasks(tasks: Array<Task>) {
        this.taskList = tasks;
    }

    addNewTask (task: Task) {
        this.taskList.unshift(task);
    }

    removeTask(index) {
        var taskToRemove = this.taskList[index];

        if (taskToRemove) {
            this.taskList.splice(index, 1);
        }
    }

    ngOnInit() {
        
    }
}
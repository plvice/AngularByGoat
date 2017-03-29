import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'todolist',
    templateUrl: 'todolist.component.html'
})

export class TodoListComponent implements OnInit {
    taskList: Array<Object>;

    constructor() {
        var initialTask = {
            title: 'Add new task',
            priority: 2
        };

        this.taskList = [];
        this.addNewTask(initialTask);
    }

    addNewTask(task) {
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
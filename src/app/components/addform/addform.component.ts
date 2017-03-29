import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'addform',
    templateUrl: 'addform.component.html'
})

export class AddFormComponent implements OnInit {
    task: Object;
    taskTitle: String;
    taskPriority: Number;

    constructor() { }

    addTask() {
        this.task = {
            title: this.taskTitle,
            priority: this.taskPriority
        }
    }

    ngOnInit() {
        console.log('add task form initialized');
    }
}
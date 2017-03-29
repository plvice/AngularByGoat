import { Component, OnInit } from '@angular/core';
import { Task } from '../../app.task';

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
        this.task = new Task(this.taskTitle, this.taskPriority);
    }

    ngOnInit() {
        console.log('add task form initialized');
    }
}
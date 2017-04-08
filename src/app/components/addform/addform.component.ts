import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../app.task';

@Component({
    selector: 'addform',
    templateUrl: 'addform.component.html'
})

export class AddFormComponent implements OnInit {
    @Output() taskAdded =  new EventEmitter();
    task: Object;
    taskTitle: String;
    taskPriority: Number;

    constructor() { 
        this.taskPriority = 0;
    }

    addTask() {
        this.task = new Task(this.taskTitle, this.taskPriority);
        this.taskAdded.emit(this.task);
        this.clearModel();
    }

    clearModel() {
        this.taskTitle = '';
        this.taskPriority = 0;
    }

    ngOnInit() {

    }
}
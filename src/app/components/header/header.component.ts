import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
    @Output() formReset = new EventEmitter();

    constructor() { 
        
    }

    ngOnInit() { 
        
    }

    resetList() {
        console.log('event emitter');
        this.formReset.emit(null);
    }
}
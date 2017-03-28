import { Component } from '@angular/core';
import { Data } from './app.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    table: Array<String>;
    obj: Object;
    attr: String;
    
    constructor() {
        this.table = ['test1', 'test2', 'test3'];
        // this.obj = new Data(1123, 'stringa mamy');
        this.attr = "testowy string";
        setTimeout(() => this.attr = "test", 1000);
        // setTimeout(this.moreLater, 2000);
    }

    later () {
        this.attr = "inny string";
    }

    moreLater () {
        console.log(this.attr);
    }

    button () {
        console.log(this.attr);
    }

}

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

 @Output() eventemitter:EventEmitter<string>=new EventEmitter<string>();

 sendData(data:string)
 {
  this.eventemitter.emit(data)
 }

 
}

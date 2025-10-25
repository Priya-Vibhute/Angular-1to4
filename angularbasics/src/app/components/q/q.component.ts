import { Component, ElementRef, Input, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-q',
  imports: [],
  templateUrl: './q.component.html',
  styleUrl: './q.component.css'
})
export class QComponent {

  @Input() data="";
  @ViewChild('inputBox') inputBox !:ElementRef

  constructor()
  {
   console.log("Constructor",this.data);
   
  }

  ngOnChanges(changes:SimpleChanges)
  {
    console.log("ngOnchanges",changes);
    
  }

  ngOnInit()
  {
    console.log("ngOnInit",this.data);
  }

  ngDoCheck()
  {
    console.log("ngDoCheck",this.inputBox);
    
  }

  ngAfterContentInit()
  {
     console.log("ngAfterContentInit",this.inputBox);  
  }

  ngAfterViewInit()
  {
    console.log("ngAfterViewInit",this.inputBox);
    this.inputBox.nativeElement.focus();
    
  }

  ngOnDestroy()
  {
    console.log("Component destroyed");
    
  }



}

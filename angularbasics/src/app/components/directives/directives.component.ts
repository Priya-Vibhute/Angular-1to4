import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  imports: [CommonModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {

  darkTheme:boolean=true;
  size:string='25px';
  status:boolean=true;
  loggedIn:boolean=false;
  colors:string[]=['red','yellow','green','purple']

  todos= [
    {
      "id": 1,
      "todo": "Do something nice for someone you care about",
      "completed": false,
      "userId": 152
    },
    {
      "id": 2,
      "todo": "Memorize a poem",
      "completed": true,
      "userId": 13
    },
    {
      "id": 3,
      "todo": "Watch a classic movie",
      "completed": true,
      "userId": 68
    },
    {
      "id": 4,
      "todo": "Watch a documentary",
      "completed": false,
      "userId": 84
    }]

  toggleLogin()
  {
    this.loggedIn=!this.loggedIn
  }

  toggleTheme()
  {
    this.darkTheme=!this.darkTheme
  }

  styles()
  {
    return { color: 'red', 'font-size': this.size };
  }

  // changeSize('50px')
  changeSize(fontSize:string)
  {
    this.size=fontSize;
  }



}

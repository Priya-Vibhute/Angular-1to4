import { CommonModule} from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-examples',
  imports: [CommonModule],
  templateUrl: './pipe-examples.component.html',
  styleUrl: './pipe-examples.component.css'
})
export class PipeExamplesComponent {

  user={email:'abc@gmail.com',age:20,name:"Nisha"}

  date=new Date();

}

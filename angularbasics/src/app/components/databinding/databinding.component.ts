import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  imports: [],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css',
})
export class DatabindingComponent {
  name = 'Nisha';
  age = 19;
  placeholder='***********'
  color='red'

  showAlert() {
    alert('Button Clicked');
  }

  // changePlaceHolder('Please enter name here')
  changePlaceHolder(value: string) {
    this.placeholder=value;
  }

  changeColor(value:string)
  {
   this.color=value;
  }
}

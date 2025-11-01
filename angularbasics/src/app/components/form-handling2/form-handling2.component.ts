import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';


export function commonPassword(controls:AbstractControl):ValidationErrors|null
{
   let commonPasswords=["1234","12345678","abcd","abc","abcde","password"];
   if(commonPasswords.includes(controls.value))
   {
      return {commonPassword:true}
   }
   else
   {
       return null;
   }
}


@Component({
  selector: 'app-form-handling2',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './form-handling2.component.html',
  styleUrl: './form-handling2.component.css'
})
export class FormHandling2Component {

  form !:FormGroup;

  constructor(private formBuilder:FormBuilder)
  {
   this.form= this.formBuilder.group({
      name:['',[Validators.required,Validators.minLength(2),Validators.maxLength(15)]],
      email:['',[Validators.email,Validators.required]],
      age:[undefined,[Validators.min(1),Validators.max(60),Validators.required]],
      password:[undefined,[Validators.required,commonPassword]]
    })
  }

  onSubmit()
  {
    console.log(this.form);
    
  }

}

import { Routes } from '@angular/router';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { HomeComponent } from './components/home/home.component';
import { InputAndOutputComponent } from './input-and-output/input-and-output.component';

export const routes: Routes = [
   {path:"",component:HomeComponent},
   {path:"data-binding",component:DatabindingComponent},
   {path:"input-output",component:InputAndOutputComponent}
];

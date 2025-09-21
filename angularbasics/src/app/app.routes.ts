import { Routes } from '@angular/router';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { HomeComponent } from './components/home/home.component';
import { InputAndOutputComponent } from './input-and-output/input-and-output.component';
import { Dirent } from 'fs';
import { DirectivesComponent } from './components/directives/directives.component';
import { PipeExamplesComponent } from './components/pipe-examples/pipe-examples.component';

export const routes: Routes = [
   {path:"",component:HomeComponent},
   {path:"data-binding",component:DatabindingComponent},
   {path:"input-output",component:InputAndOutputComponent},
   {path:"directives",component:DirectivesComponent},
   {path:'pipes',component:PipeExamplesComponent}
];

import { Routes } from '@angular/router';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { HomeComponent } from './components/home/home.component';
import { InputAndOutputComponent } from './input-and-output/input-and-output.component';
import { Dirent } from 'fs';
import { DirectivesComponent } from './components/directives/directives.component';
import { PipeExamplesComponent } from './components/pipe-examples/pipe-examples.component';
import { ServiceComponent } from './components/service/service.component';
import { ComponentLifecycleComponent } from './components/component-lifecycle/component-lifecycle.component';
import { ObservablesComponent } from './observables/observables.component';
import { QuotesComponent } from './components/quotes/quotes.component';
import { ProductAPIComponent } from './components/product-api/product-api.component';

export const routes: Routes = [
   {path:"",component:HomeComponent},
   {path:"data-binding",component:DatabindingComponent},
   {path:"input-output",component:InputAndOutputComponent},
   {path:"directives",component:DirectivesComponent},
   {path:'pipes',component:PipeExamplesComponent},
   {path:'services',component:ServiceComponent},
   {path:'component-lifecycle',component:ComponentLifecycleComponent},
   {path:'observables',component:ObservablesComponent},
   {path:'quotes',component:QuotesComponent},
   {path:'products',component:ProductAPIComponent}
];

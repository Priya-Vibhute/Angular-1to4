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
import { FormHandling1Component } from './components/form-handling1/form-handling1.component';
import { FormHandling2Component } from './components/form-handling2/form-handling2.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'data-binding', component: DatabindingComponent },
  { path: 'input-output', component: InputAndOutputComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'pipes', component: PipeExamplesComponent },
  { path: 'services', component: ServiceComponent },
  { path: 'component-lifecycle', component: ComponentLifecycleComponent },
  { path: 'observables', component: ObservablesComponent },
  { path: 'quotes', component: QuotesComponent },
  { path: 'products', component: ProductAPIComponent },
  { path: 'form-handling-1', component: FormHandling1Component },
  { path: 'form-handling-2', component: FormHandling2Component},
];

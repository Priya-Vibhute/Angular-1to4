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
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { OrdersComponent } from './components/orders/orders.component';
import { authGuard } from './guards/auth-guard.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent,title:'home' },
  { path: 'data-binding', component: DatabindingComponent ,title:"Data Binding"},
  { path: 'input-output', component: InputAndOutputComponent,canActivate:[authGuard] },
  { path: 'directives', component: DirectivesComponent },
  { path: 'pipes', component: PipeExamplesComponent },
  { path: 'services/:id', component: ServiceComponent },
  { path: 'component-lifecycle', component: ComponentLifecycleComponent },
  { path: 'observables', component: ObservablesComponent },
  { path: 'quotes', component: QuotesComponent },
  { path: 'products', component: ProductAPIComponent ,
    children:[
      { path:'product-detail/:id',component:ProductDetailComponent},
      { path:':id/orders',component:OrdersComponent}
    ] 
  },
  { path: 'form-handling-1', component: FormHandling1Component },
  { path: 'form-handling-2', component: FormHandling2Component},
  { path:'**',component:NotFoundComponent}
];

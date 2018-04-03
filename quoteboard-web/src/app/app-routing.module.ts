import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CountDownComponent } from './count-down/count-down.component';

// Define routing table
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'countdown', component: CountDownComponent },
  { path: 'lazy', loadChildren: 'app/lazy-loaded/lazy-loaded.module#LazyLoadedModule' },
  { path: 'quotations', loadChildren: 'app/quotations/quotations.module#QuotationsModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes) // This has been modified
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

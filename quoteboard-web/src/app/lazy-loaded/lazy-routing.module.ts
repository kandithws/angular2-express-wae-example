import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LazyLoadedComponent } from './lazy-loaded.component';


const routes: Routes = [
  { path: '', component: LazyLoadedComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class LazyRoutingModule { }

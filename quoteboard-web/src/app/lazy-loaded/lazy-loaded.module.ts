import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadedComponent } from './lazy-loaded.component';
import { LazyRoutingModule } from './lazy-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LazyRoutingModule
  ],
  declarations: [
    LazyLoadedComponent
  ]
})
export class LazyLoadedModule { }

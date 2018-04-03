import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { QuotationsListComponent } from "./quotations-list/quotations-list.component";
import { QuotationDetailsComponent } from "./quotation-details/quotation-details.component";

const routes: Routes = [
 {path: '', component: QuotationsListComponent},
 {path: ':id', component: QuotationDetailsComponent}
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
export class QuotationRoutingModule { }

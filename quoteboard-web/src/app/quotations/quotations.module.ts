import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotationService } from "./shared/quotation.service";
import { QuotationsListComponent } from './quotations-list/quotations-list.component';
import { QuotationRoutingModule } from "./quotation-routing.module";
import { QuotationDetailsComponent } from './quotation-details/quotation-details.component';

@NgModule({
  imports: [
    CommonModule,
    QuotationRoutingModule
  ],
  declarations: [QuotationsListComponent, QuotationDetailsComponent],
  providers: [QuotationService] //classes that belong to this module 
})
export class QuotationsModule { }

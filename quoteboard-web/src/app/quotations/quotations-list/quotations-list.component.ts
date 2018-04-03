import { Component, OnInit } from '@angular/core';
import { QuotationService } from "../shared/quotation.service";
import { Quotation } from "../shared/quotation.model";

@Component({
  selector: 'app-quotations-list',
  templateUrl: './quotations-list.component.html',
  styleUrls: ['./quotations-list.component.css']
})
export class QuotationsListComponent implements OnInit {
  quotations = new Array<Quotation>();
  constructor(private quotationService: QuotationService) { }

  ngOnInit() {
    this.fetchQuotations();
  }
 
  fetchQuotations() {
    this.quotationService.findAll()
    .subscribe(quotations => this.quotations = quotations);
  }

}

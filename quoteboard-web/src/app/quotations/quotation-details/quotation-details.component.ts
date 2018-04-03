import { Component, OnInit } from '@angular/core';
import { QuotationService } from "../shared/quotation.service";
import { Quotation } from "../shared/quotation.model";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-quotation-details',
  templateUrl: './quotation-details.component.html',
  styleUrls: ['./quotation-details.component.css']
})
export class QuotationDetailsComponent implements OnInit {
  private quotation: Quotation;

  constructor(private quotationService: QuotationService, 
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const id = params.id;
      this.fetchQuotation(id);
    });
  }

  fetchQuotation(id: string) {
    this.quotationService.findById(id)
    .subscribe(quotation => this.quotation = quotation);
  }

}

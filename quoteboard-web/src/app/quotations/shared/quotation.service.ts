import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import { Quotation } from "./quotation.model";
import 'rxjs/add/operator/map'; // map operator is not implemeted in Observable

// injecting dependecies and instatiate other those dependecies classes defined in app.module.ts @NgModule{.. imports[] ...}
// Don't worry about singleton pattern at all
@Injectable()
export class QuotationService {

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Array<Quotation>> {
    return this.httpClient
      .get('http://localhost:3000/quotations')
      .map((data: Array<any>) => {
        const quotations = new Array<Quotation>();
        for (const item of data) {
          quotations.push(new Quotation(item));
        }
        return quotations;
      });
  }

  findById(id: string){
    return this.httpClient
    .get(`http://localhost:3000/quotations/${id}`)
    .map(response => new Quotation(response));
  }

}

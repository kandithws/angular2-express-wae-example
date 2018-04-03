import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { CountDownComponent } from './count-down/count-down.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountDownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule, // This has been added
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

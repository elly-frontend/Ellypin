import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustodianComponent } from './custodian/custodian.component';
import { DataService } from '../data.service';

@NgModule({
  declarations: [
    AppComponent,
    CustodianComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { NgxLoadingModule } from 'ngx-loading';

import { FormsModule ,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { ContractsService } from './contract.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxLoadingModule.forRoot({}),
    ReactiveFormsModule,
    routing
  ],
  providers: [ContractsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

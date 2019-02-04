import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { NgxLoadingModule } from 'ngx-loading';

import { FormsModule ,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { ContractService } from '../services/contract.service';
import { DataService } from '../services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { PodComponent } from './pod/pod.component';
import { PomComponent } from './pom/pom.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CustomerComponent } from './customer/customer.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { CustodianComponent } from './custodian/custodian.component';
import { AdminComponent } from './admin/admin.component';
import { CustodianService } from '../services/custodian.service';
import { TermsComponent } from './terms/terms.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { FaqComponent } from './faq/faq.component';
import { WhitepaperComponent } from './whitepaper/whitepaper.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServiceComponent,
    PodComponent,
    PomComponent,
    SidebarComponent,
    CustomerComponent,
    CustodianComponent,
    AdminComponent,
    TermsComponent,
    ContactComponent,
    AboutComponent,
    ProductsComponent,
    FaqComponent,
    WhitepaperComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxLoadingModule.forRoot({}),
    ReactiveFormsModule,
    NgxPaginationModule,
    routing
  ],
  providers: [DataService,ContractService, CustodianService],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { CustodianComponent } from './custodian/custodian.component';
import { AdminComponent } from './admin/admin.component';

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
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxLoadingModule.forRoot({}),
    ReactiveFormsModule,
    routing
  ],
  providers: [DataService,ContractService],
  bootstrap: [AppComponent]
})
export class AppModule { }

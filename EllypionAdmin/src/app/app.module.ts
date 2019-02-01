import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../data.service';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent
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

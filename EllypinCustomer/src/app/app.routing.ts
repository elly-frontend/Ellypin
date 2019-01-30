import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PodComponent } from './pod/pod.component';
import { PomComponent } from './pom/pom.component';
import { CustomerComponent } from './customer/customer.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent,  },
  { path: 'service', component:ServiceComponent   },
  { path: 'common', component: SidebarComponent, children : [
    { path:'pod', component:PodComponent },
    { path:'pom', component:PomComponent },
    { path:'customer', component:CustomerComponent }
  ]},
  {path:'', redirectTo:'/home', pathMatch:'full' },
  {path:'**', redirectTo:'/home', pathMatch:'full'  }
  ]; 
  export const routing:ModuleWithProviders = RouterModule.forRoot(routes,{ useHash: true });
  
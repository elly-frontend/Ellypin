import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { CustodianComponent } from './custodian/custodian.component';

export const routes: Routes = [
  { path: 'custodian', component: CustodianComponent,  },
  {path:'', redirectTo:'/custodian', pathMatch:'full' },
  {path:'**', redirectTo:'/custodian', pathMatch:'full'  }
  ]; 
  export const routing:ModuleWithProviders = RouterModule.forRoot(routes,{ useHash: true });
  
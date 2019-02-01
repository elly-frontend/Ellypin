import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [
  { path: 'admin', component: AdminComponent,  },
  {path:'', redirectTo:'/admin', pathMatch:'full' },
  {path:'**', redirectTo:'/admin', pathMatch:'full'  }
  ]; 
  export const routing:ModuleWithProviders = RouterModule.forRoot(routes,{ useHash: true });
  
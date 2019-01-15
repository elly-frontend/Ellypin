import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent,  },
  { path: 'service', component:ServiceComponent   },
//   { path: 'header', component:HeaderComponent, children:[
//     { path: 'welcome', component: WelcomeComponent, canActivate:[AuthGuardService] },
//     { path: 'sendPassword', component: SendPasswordComponent, canActivate:[AuthGuardService] },
//     { path: 'received', component: ReceivedPasswordComponent, canActivate:[AuthGuardService]  }
//   ] },
  {path:'', redirectTo:'/home', pathMatch:'full' },
  {path:'**', redirectTo:'/home', pathMatch:'full'  }
  ]; 
  export const routing:ModuleWithProviders = RouterModule.forRoot(routes,{ useHash: true });
  
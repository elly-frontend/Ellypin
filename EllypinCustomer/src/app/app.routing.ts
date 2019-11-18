import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PodComponent } from './pod/pod.component';
import { PomComponent } from './pom/pom.component';
import { CustomerComponent } from './customer/customer.component';
import { AdminComponent } from './admin/admin.component';
import { CustodianComponent } from './custodian/custodian.component';
import { TermsComponent } from './terms/terms.component';
import { WhitepaperComponent } from './whitepaper/whitepaper.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', component: HomeComponent,  },
  // { path: 'service', component:ServiceComponent   },
  {path: 'admin', component:AdminComponent},
  {path:'custodian', component:CustodianComponent},
  {path:'terms', component:TermsComponent},
  {path:'whitepaper', component:WhitepaperComponent},
  {path:'product', component:ProductsComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'faq', component:FaqComponent},
  { path: 'services', component: SidebarComponent, children : [
    { path:'pod', component:PodComponent },
    { path:'pom', component:PomComponent },
    { path:'customer', component:CustomerComponent }
  ]},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'', redirectTo:'/', pathMatch:'full' },
  {path:'**', redirectTo:'/', pathMatch:'full'  }
  ];
  export const routing:ModuleWithProviders = RouterModule.forRoot(routes,{ useHash: true });

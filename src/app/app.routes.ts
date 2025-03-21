import { Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { ManageCustomerComponent } from './page/manage-customer/manage-customer.component';
import { AddCustomerFormComponent } from './page/add-customer-form/add-customer-form.component';

export const routes: Routes = [
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"",
    component:LoginComponent
  },
  // dashboard/manage-customer
  // dashboard/add-customer
  {
    path:"dashboard",
    component:DashboardComponent,
    children:[
      {
        path:"manage-customer",
        component:ManageCustomerComponent
      },
      {
        path:"add-customer",
        component:AddCustomerFormComponent
      }
    ]
  }
];

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  //login path -DashboardComponent
  {
    path:'',component:LoginComponent
  },
  //dashboard
  {
    path:'dashboard',component:DashboardComponent
  },
  //register
  {
    path:'register',component:RegisterComponent
  },
  //transaction TransactionComponent
  {
    path:'transaction',component:TransactionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

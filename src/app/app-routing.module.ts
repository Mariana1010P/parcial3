import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { GenericoComponent } from './dashboard/generico/generico.component';
import { authGuard } from './auth/auth.guard';
import { Utils } from './utils/utils';
import { UserAdminComponent } from './dashboard/user-admin/user-admin.component';

const routes: Routes = [

  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'dashboard', component:DashboardComponent ,canActivate: [authGuard],
    children: [
      {
        path: '', component: UserAdminComponent,
      },
      {
        path: '', component: GenericoComponent,
      }
    ]
  },
  {
    path: 'logout', redirectTo:'/login', pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

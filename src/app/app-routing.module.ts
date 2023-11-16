import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { GenericoComponent } from './dashboard/generico/generico.component';
import { authGuard } from './auth/auth.guard';
import { UserAdminComponent } from './dashboard/user-admin/user-admin.component';
import { RestrictedComponent } from './restricted/restricted.component';
import { ProductComponent } from './product/product.component';
import { PromocionesComponent } from './promociones/promociones.component';

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
        path:'productos', component: ProductComponent
      },
      {
        path:'promociones', component: PromocionesComponent
      }
      /* {
        path: '', component: GenericoComponent,
        canMatch:[()=>Utils.isRole('cliente')]
      }*/
      
    ]
  },
  {
    path: 'restricted', component:RestrictedComponent
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

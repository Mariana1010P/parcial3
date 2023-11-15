import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { GenericoComponent } from './generico/generico.component';
import { UserAdminComponent } from './user-admin/user-admin.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    GenericoComponent,
    UserAdminComponent,
    SidenavComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ], exports: [
    GenericoComponent,
    UserAdminComponent,
    SidenavComponent,
    DashboardComponent
  ]
})
export class DashboardModule { }

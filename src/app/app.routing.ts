import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './admin/layouts/admin-layout/admin-layout.component';
import { MenuComponent } from './principal/components/menu/menu.component';
import { LoginComponent } from './principal/components/login/login.component';
import { RegistrarComponent } from './principal/components/registrar/registrar.component';
import { HomeComponent } from './principal/views/home/home/home.component';
import { ReserveComponent } from './principal/views/reserve/reserve/reserve.component';

const routes: Routes =[
  { path : '', component : HomeComponent },
  { path : 'login', component : LoginComponent},
  { path : 'register', component : RegistrarComponent},
  { path : 'reserve', component : ReserveComponent},
  {
    path: 'dashboard',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
  path: '',
  component: AdminLayoutComponent,
  children: [{
    path: '',
    loadChildren: './admin/layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]
}
  // { path : 'dashboard', component : AdminLayoutComponent}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: false
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }

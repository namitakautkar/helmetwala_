import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { McategoriesComponent } from './mainpages/mcategories/mcategories.component';

import {MaincomponentModule}  from '../app/maincomponent/maincomponent.module'
import {MainpagesModule} from '../app/mainpages/mainpages.module'


const routes: Routes =[
   {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
      }
    ]
  }, {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule'
      }
    ]
  }, {
    path: '**',
    redirectTo: 'dashboard'
  }
];

const RoutesInfo: Routes=[
  {
    path:'categories',
    component: McategoriesComponent,
  },
  {
    path: 'addhelmet',
    loadChildren: './mainpages/mainpages.module#MainpagesModule'
  },
  {
    path: '',
    loadChildren: './maincomponent/maincomponent.module#MaincomponentModule'
  },
  {
    path: '',
    redirectTo: 'maincomponent/mcategories',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    MaincomponentModule,
    MainpagesModule,
    RouterModule.forRoot(routes,{
      useHash: true
    }),
    RouterModule.forRoot(RoutesInfo,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }

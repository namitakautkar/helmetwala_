import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { McategoriesComponent } from './mcategories/mcategories.component';
import {Helmet} from './helmet'
import {RouterModule, Routes} from '@angular/router';
import { AddhelmetComponent } from './addhelmet/addhelmet.component';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import {map} from 'rxjs/operators';
import { Action } from 'rxjs/internal/scheduler/Action';

var routes: Routes=[
  {
    path: 'categories',
    component: McategoriesComponent
  },
  {
    path: 'addhelmet',
    component: AddhelmetComponent
  },
  {
    path: '',
    redirectTo: 'mainpages/mcategories',
    pathMatch: 'full'
  }
]

@NgModule({
  
  declarations: [McategoriesComponent, AddhelmetComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class MainpagesModule {}

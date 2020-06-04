import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MsidebarComponent } from './msidebar/msidebar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Routes} from '@angular/router';

var routes: Routes=[
  {
    path: '',
    component: MsidebarComponent
  }
]

@NgModule({
  declarations: [
    MsidebarComponent
  ],

  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(routes)
  ]
})
export class MaincomponentModule { }

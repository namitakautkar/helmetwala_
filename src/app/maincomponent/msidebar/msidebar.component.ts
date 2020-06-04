import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: 'maincomponent/mcategories', title: 'Categories',  icon: 'ni-tv-2 text-primary', class: '' },
];

@Component({
  selector: 'app-msidebar',
  templateUrl: './msidebar.component.html',
  styleUrls: ['./msidebar.component.css']
})
export class MsidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}

import { Component, OnInit } from '@angular/core';
import { PageService } from './page.service';
import { Page } from './page';
import { PagesListComponent } from './pages-list/pages-list.component';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MenuComponent } from './menu/menu.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],

  directives: [PagesListComponent, ROUTER_DIRECTIVES, MenuComponent],
})
export class AppComponent implements OnInit {
  title = 'AWESOME BLOG!';
  pages;
  errorMessage;

  constructor() { }

  ngOnInit() {
  }
}

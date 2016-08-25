import { Component, OnInit, Input } from '@angular/core';
import { Page } from '../page';
import { PageService } from '../page.service';
import { UserService } from '../user.service';
import { PageDetailComponent } from '../page-detail/page-detail.component';
import { PageFormComponent } from '../page-form/page-form.component';
import { Router }              from '@angular/router';
import { LoggedInGuard } from '../guard/logged-in';

@Component({
  moduleId: module.id,
  selector: 'pages-list',
  templateUrl: 'pages-list.component.html',
  styleUrls: ['pages-list.component.css'],
  providers: [PageService, UserService, LoggedInGuard],
  directives: [PageDetailComponent, PageFormComponent]
})
export class PagesListComponent implements OnInit {

  pages: Page[];
  selectedPage: Page;
  createPage = false;

  constructor(
      private pageService: PageService,
      private userService: UserService,
      private router: Router
  ) { }

  getPages() {
    return this.pageService.getPages()
        .then(pages => {
          this.pages = pages;
        });
  }

  ngOnInit() {
    this.getPages();
    console.log(this.userService.getTokenData())
  }

  onChoose(page){
    console.log('choose');
    this.router.navigate(['/page', page.id]);
  }

}

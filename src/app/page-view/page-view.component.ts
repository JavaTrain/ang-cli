import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute }       from '@angular/router'
import { PageService } from '../page.service';
import { Page, } from '../page';
import { PageDetailComponent } from '../page-detail/page-detail.component';
import { PageFormComponent } from '../page-form/page-form.component';

@Component({
  moduleId: module.id,
  selector: 'app-page-view',
  templateUrl: 'page-view.component.html',
  styleUrls: ['page-view.component.css'],
  providers: [PageService],
  directives: [PageDetailComponent, PageFormComponent]
})
export class PageViewComponent implements OnInit {

  page: Page;
  private sub: any;
  private editPage: Page;
  private edit = false;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private service: PageService
  ) { }

  ngOnInit() {
    console.log('init view component');
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];
      this.service.getPage(id).then(page => this.page = page);
      console.log(id);
    })
  }

  gotoPages(){
    this.router.navigate(['/list']);
  }

  onEdit(page){
    this.editPage = page;
    if(this.edit){
      this.edit=false;
    }else{
      this.edit=true;
    }
  }

}

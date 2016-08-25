import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { NgForm }    from '@angular/forms';
import { Page }    from '../page';
import { PageService } from '../page.service';
import { PagesListComponent } from '../pages-list/pages-list.component';
import { Router, ActivatedRoute }       from '@angular/router'

@Component({
  moduleId: module.id,
  selector: 'page-form',
  templateUrl: 'page-form.component.html',
  styleUrls: ['page-form.component.css'],
  providers: [PageService],
})
export class PageFormComponent implements OnInit {
  @Output()
  notify: EventEmitter<any> = new EventEmitter<any>();
  submitted = false;
  @Input()
  model = new Page();
  per;
  pagesList;
  pages;
  @Input()
  edit = false;

  constructor(
      private pageService: PageService,
      private router: Router
  ) { }

  ngOnInit() {
  }

  createPage(){
    this.pageService.addPage(this.model);
    this.submitted = true;
    //this.notify.emit(this.model);
    setTimeout(() => {
      this.router.navigate(['/list']);
    }, 700);
    //this.pagesList.pages.push(model);
    //this.pageService.addPage('frf');
  }

  updatePage(){
    console.log('!!!EDIT!!!', this.model);
    this.pageService.updatePage(this.model);
  }

  onSubmit() {
    if(this.model.id){
      this.updatePage();
    }else{
      this.createPage();
    }
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }
}

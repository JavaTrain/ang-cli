import { Component, OnInit, Input } from '@angular/core';
import { Page } from '../page';

@Component({
  moduleId: module.id,
  selector: 'page-detail',
  templateUrl: 'page-detail.component.html',
  styleUrls: ['page-detail.component.css'],
})
export class PageDetailComponent implements OnInit {

  @Input()
  page: Page;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(page){
    console.log(page);
  }

}

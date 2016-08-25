import { Injectable } from '@angular/core';
import { Page } from './page';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import { Headers, RequestOptions } from '@angular/http';
@Injectable()
export class PageService {


  constructor(private http: Http) {}

  private pagesUrl = "http://api-test.loc/app_dev.php/api/v1/pages";
  private loginUrl = "http://api-test.loc/app_dev.php/api/v1/tokens";

  getPages(): Promise<Page[]> {
    return this.http.get(this.pagesUrl)
      .map(response => {
        return response.json(); // Has a value
      })
      .toPromise()
      ;
  }
  addPage(page: Page) {
    let body = JSON.stringify(page),
      headers = new Headers({ 'Content-Type': 'application/json' }),
      options = new RequestOptions({ headers: headers });

    return this.http.post(this.pagesUrl, body, options)
      .map(response => {
        return response; // Has a value
      })
      .toPromise()
      ;
  }
  updatePage(page: Page) {
    let body = JSON.stringify(page),
      headers = new Headers({ 'Content-Type': 'application/json' }),
      options = new RequestOptions({ headers: headers });
    //console.log(body);
    this.http.put(this.pagesUrl, body, options).map(response => {
      return response;
    })
      .toPromise()
      ;
  }
  getPage(id: number): Promise<Page> {
    return this.http.get(this.pagesUrl + '/' + id)
      .map(response => {
        return response.json(); // Has a value
      })
      .toPromise()
      ;
  }

  private extractData(res: Response) {
    console.log('3434');
    let body = res.json();
    console.log(body);
    return body.data || {};
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}

import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Injectable } from '@angular/core';
import { PageBody } from './../models/PageBody';

@Injectable()
export class PageService {

  constructor(private http: HttpClient) { }

  public pagesBS = new BehaviorSubject<Object>(null);

  getPages() {
    return this.http.get('http://localhost:3000/pages');
  }

  getPage(slug) {
    return this.http.get<PageBody>('http://localhost:3000/pages/' + slug);
  }

  postAddPage(value) {
    return this.http.post('http://localhost:3000/pages/add-page', value);
  }

  getEditPage(id) {
    return this.http.get<PageBody>('http://localhost:3000/pages/edit-page/' + id);
  }

  postEditPage(value) {
    console.log('posting edit page');
    return this.http.post('http://localhost:3000/pages/edit-page/' + value.id, value);
  }

  deletePage(id) {
    return this.http.get('http://localhost:3000/pages/delete-page/' + id);
  }
}

import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {

  constructor(
    private http: Http
  ) { }

  ngOnInit() {
  }

  getSidebar() {
    return this.http.get('http://localhost:3000/sidebar/edit-sidebar')
      .map(res => res.json());
  }

  postSidebar(value) {
    return this.http.post('http://localhost:3000/sidebar/edit-sidebar', value)
      .map(res => res.json());
  }

}

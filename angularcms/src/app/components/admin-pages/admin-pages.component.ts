import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageService } from './../../services/page.service';

@Component({
  selector: 'app-admin-pages',
  templateUrl: './admin-pages.component.html',
  styleUrls: ['./admin-pages.component.css']
})
export class AdminPagesComponent implements OnInit {

  pages: any;
  successMsg: boolean = false;
  errorMsg: boolean = false;

  constructor(
    private pageService: PageService,
    private router: Router
  ) { }

  ngOnInit() {
    if (localStorage.getItem("user") != "\"admin\"") {
      this.router.navigateByUrl('');
    }
    this.pages = this.pageService.pagesBS;    
  }

  deletePage(id){
    if (confirm('Confirm deletion')) {
      this.pageService.deletePage(id).subscribe(res => {
        if (res == 'error') {
          this.errorMsg = true;
          setTimeout(function () {
            this.errorMsg = false;
          }.bind(this), 2000);
        } else {
          this.successMsg = true;
          setTimeout(function () {
            this.successMsg = false;
          }.bind(this), 2000);
          this.pageService.getPages().subscribe(pages => {
            this.pageService.pagesBS.next(pages);
          });
        }
      });
    }
  }

}

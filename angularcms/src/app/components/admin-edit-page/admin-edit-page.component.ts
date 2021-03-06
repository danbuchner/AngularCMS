import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { PageService } from './../../services/page.service';
import { PageBody } from './../../models/PageBody';

declare var CKEDITOR: any; 

@Component({
  selector: 'app-admin-edit-page',
  templateUrl: './admin-edit-page.component.html',
  styleUrls: ['./admin-edit-page.component.css']
})
export class AdminEditPageComponent implements OnInit {

  page: PageBody;
  title: string;
  content: string;
  id: string;
  successMsg: boolean = false;
  errorMsg: boolean = false;
  errorMsg2: boolean = false;
  param: any;
  sidebar: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pageService: PageService

  ) { }

  ngOnInit() {
    if (localStorage.getItem("user") != "\"admin\"") {
      this.router.navigateByUrl('');
    } else {
      CKEDITOR.replace('content');
    } 
    this.route.params.subscribe(params => {
      this.param = params['id'];
      this.pageService.getEditPage(this.param).subscribe(page => {
        this.page = page;
        this.title = page.title;
        this.content = page.content;
        this.id = page._id;
        if (page.sidebar == "yes"){
          this.sidebar = true;
        } else {
          this.sidebar = false;
        }        
      });

    });
  }

  editPage({ value, valid }) {   
    if (valid) {      
      value.content = CKEDITOR.instances.content.getData();    
      this.pageService.postEditPage(value).subscribe(res => {        
        if (res == 'pageExists') {
          console.log('pageExists');
          this.errorMsg = true;
          setTimeout(function () {
            this.errorMsg = false;
          }.bind(this), 2000);
        } else if (res == 'problem') {
          console.log('problem');
          this.errorMsg2 = true;
          setTimeout(function () {
            this.errorMsg2 = false;
          }.bind(this), 2000);
        } else {
          console.log('ok');
          this.successMsg = true;
          setTimeout(function () {
            this.successMsg = false;
          }.bind(this), 2000);

          this.pageService.getPages().subscribe(pages => {
            this.pageService.pagesBS.next(pages);
          });
        }
      });
    } else {
      console.log('Form is not valid.');
    }
  }

}

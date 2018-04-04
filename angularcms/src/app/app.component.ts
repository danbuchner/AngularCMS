import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  get front() {
    if (localStorage.getItem("user") == "\"admin\"") {
      return false;
    } else {
      return true;
    }
  }
}

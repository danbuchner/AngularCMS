import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  register(user) {
    return this.http.post('http://localhost:3000/users/register', user);
  }

  login(user) {
    return this.http.post('http://localhost:3000/users/login', user);
  }
}

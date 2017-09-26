import { Component, OnInit, Inject } from '@angular/core';

import { TestService } from './test.service';
import {HttpClient} from "@angular/common/http";

@Component({
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {

  user: any;
  title: string;
  results: any;
  constructor(public testService: TestService, private http: HttpClient) {
  }

  ngOnInit() {
    this.user = this.testService.getUser();
    this.http.get('/api/v1/rbac/users').subscribe(data => {
      // Read the result field from the JSON response.
      console.log(JSON.stringify(data, undefined, '\t'));
      this.results = JSON.stringify(data);
    });
    console.log(111);
  }


}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'userage3',
  templateUrl: './userage3.component.html',
  styleUrls: ['./userage3.component.css']
})
export class Userage3Component implements OnInit {

  testAttr = 'i am someone attr';
  otherAttr = 'i am other attr';
  testMethod (value) {
    return value + '1';
  }
  constructor() { }

  ngOnInit() {
  }

}

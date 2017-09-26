import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'userage2',
  templateUrl: './userage2.component.html',
  styleUrls: ['./userage2.component.css']
})
export class Userage2Component implements OnInit {

  person = {
    name: 'bob'
  };
  today: number = Date.now();
  und = null;
  name = 'bob';
  age = 12;
  eat () {
    return 'i am eating now';
  }
  constructor() { }

  ngOnInit() {
  }

}

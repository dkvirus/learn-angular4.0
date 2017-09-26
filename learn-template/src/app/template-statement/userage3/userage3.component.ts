import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'userage3',
  templateUrl: './userage3.component.html',
  styleUrls: ['./userage3.component.css']
})
export class Userage3Component implements OnInit {
  imageUrl: string;
  testAttr = 'i am someone attr';
  otherAttr = 'i am other attr';
  testMethod (value) {
    return value + '1';
  }
  constructor() {
  }

  ngOnInit() {
    const arr = ['../../../assets/images/page1.png', '../../../assets/images/page2.png', '../../../assets/images/page3.png'];
    const indexArr = [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2];
    const that = this;
    this.imageUrl = '../../../assets/images/page1.png';
    setTimeout(() => this.imageUrl = '../../../assets/images/page2.png', 2000);
    setTimeout(() => this.imageUrl = '../../../assets/images/page3.png', 4000);
    setTimeout(() => this.imageUrl = '../../../assets/images/page1.png', 6000);
  }

}

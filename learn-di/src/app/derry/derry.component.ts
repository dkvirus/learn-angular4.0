import { Component, OnInit } from '@angular/core';
import {ContactComponent, ContactP} from "../contact/contact.component";

@Component({
  selector: 'app-derry',
  templateUrl: './derry.component.html',
  styleUrls: ['./derry.component.css']
})
export class DerryComponent implements OnInit {

  constructor(public parent: ContactP) {
    console.log(this.parent);
  }

  ngOnInit() {
  }

}

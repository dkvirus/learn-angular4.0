import { Component, OnInit } from '@angular/core';
import {SharedService} from "../../service/shared.service";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private service: SharedService) { }

  ngOnInit() {
  }

  setList(val: string) {
    this.service.append(val);
  }

}

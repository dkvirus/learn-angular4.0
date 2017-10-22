import { Component, OnInit } from '@angular/core';
import {SharedService} from "../../service/shared.service";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  list: string[];
  constructor(private service: SharedService) {
    this.list = this.service.list;
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assist',
  templateUrl: './assist.component.html',
  styleUrls: ['./assist.component.css']
})
export class AssistComponent implements OnInit {

  // 依赖注入router
  constructor(private router: Router) { }

  ngOnInit() {
  }

  closeChat() {
    this.router.navigate([{ outlets: { aux: null }}]);
  }

}

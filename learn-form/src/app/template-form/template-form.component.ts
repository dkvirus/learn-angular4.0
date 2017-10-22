import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import 'rxjs/Rx';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit, AfterViewInit {
  // @ViewChild('myForm') form;

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(value: any) {
    console.log(value);
  }

  ngAfterViewInit() {
    // this.form.control.valueChanges.debounceTime(500).subscribe(data => {
    //   console.log('Form changes', data);
    // });
  }
}

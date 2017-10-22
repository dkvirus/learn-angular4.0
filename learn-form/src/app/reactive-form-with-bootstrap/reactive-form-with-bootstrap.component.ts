import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {equalValidator, mobileValidator} from '../validator/validators';

@Component({
  selector: 'app-reactive-form-with-bootstrap',
  templateUrl: './reactive-form-with-bootstrap.component.html',
  styleUrls: ['./reactive-form-with-bootstrap.component.css']
})
export class ReactiveFormWithBootstrapComponent implements OnInit {

  formModel: FormGroup;

  constructor(fb: FormBuilder) {
    this.formModel = fb.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      mobile: ['', mobileValidator()],
      passwordsGroup: fb.group({
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['']
      }, {validator : equalValidator})
    });
  }

  onSubmit() {
    if (this.formModel.valid) {
      console.log(this.formModel.value);
    }
  }

  revert() {
    this.formModel.reset();
  }

  ngOnInit() {
  }
}

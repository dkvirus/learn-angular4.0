import { Directive } from '@angular/core';
import {NG_VALIDATORS} from "@angular/forms";
import {mobileValidator} from "../validator/validators";

@Directive({
  selector: '[appMyValidator]',
  providers: [{provide: NG_VALIDATORS, useValue: mobileValidator, multi: true}]
})
export class MyValidatorDirective {

  constructor() { }

}

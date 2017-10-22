import { FormControl, FormGroup, AbstractControl, ValidatorFn } from '@angular/forms';
import {Observable} from "rxjs/Observable";

export function mobileValidator(): ValidatorFn  {
  return (control: AbstractControl): {[key: string]: any} => {
    const myreq = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    const valid = myreq.test(control.value);
    console.log('手机校验结果为：' + valid);
    // 验证规则，验证通过的时候返回null，验证不过的时候返回信息。
    return valid ? null : {mobile : true};
  };
}

// 异步校验，模拟发往服务器的校验方式。
export function mobileAsyncValidator(): ValidatorFn  {
  return (control: AbstractControl): {[key: string]: any} => {
    const myreq = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    const valid = myreq.test(control.value);
    console.log('手机校验结果为：' + valid);
    return Observable.of(valid ? null : {mobile : true}).delay(3000);
  };
}

// 多控件一起校验
export function equalValidator(group: FormGroup): any {
  const password: FormControl = group.get('password') as FormControl;
  const cpassword: FormControl = group.get('confirmPassword') as FormControl;
  const valid: boolean = (password.value === cpassword.value );
  console.log('密码校验结果为: ' + valid);
  return valid ? null : {equal: {pdesc: '密码和确认密码不匹配'}};
}

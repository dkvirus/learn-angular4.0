import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import {equalValidator, mobileAsyncValidator, mobileValidator} from '../validator/validators';
import 'rxjs/Rx';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {

  /*username: FormControl = new FormControl('Derry');

  // 场景：日历的选择
  myformModel: FormGroup = new FormGroup({
    form: new FormControl(),
    to: new FormControl()
  });

  // 处理可变的输入元素。 邮箱可以填上任意个。 少见。
  emails: FormArray = new FormArray([
    new FormControl('a@a.com'),
    new FormControl('b@b.com')
  ])
*/

  formModel: FormGroup;

  constructor(fb: FormBuilder) {
    // this.formModel = new FormGroup({
    //   username: new FormControl(),
    //   mobile: new FormControl(),
    //   // 分组的FormGroup
    //   passwordsGroup: new FormGroup({
    //     password: new FormControl(),
    //     confirmPassword: new FormControl()
    //   })
    // });

    // 通过使用 FormBuilder 来简化我们的数据模型的构造。
    // 提供了三个参数，第一：值，第二: 校验方法，第三：异步校验。
    this.formModel = fb.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      mobile: ['', mobileValidator(), mobileAsyncValidator()],
      passwordsGroup: fb.group({
        password: ['', Validators.minLength(6)],
        confirmPassword: ['']
      }, {validator : equalValidator})
    });

    // this.formModel.valueChanges.debounceTime(500).subscribe(data => {
    //   console.log('Form changes', data);
    // });

    // 请求之后获取到了值
    // this.formModel.patchValue({
    //   // xxx : '',
    //   username: 'Derry',
    //   mobile: '15111111111',
    //   passwordsGroup: {
    //     password: '123456',
    //     confirmPassword: '123456'
    //   }
    // });

    // this.formModel.setValue({
    //
    //   username: 'song',
    //   mobile: '15111110000',
    //   passwordsGroup: {
    //     password: '123456',
    //     confirmPassword: '123456'
    //   }
    // });
  }

  onSubmit() {
    // const flag = this.formModel.hasError('required', ['username']);
    // console.log(flag);
    if (this.formModel.valid) {
      console.log(this.formModel.value);
    }
  }

  ngOnInit() {
  }

}

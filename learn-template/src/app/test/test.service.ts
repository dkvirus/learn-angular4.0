import { Injectable } from '@angular/core';

import { LogService } from './log.service';

@Injectable()
export class TestService {

  constructor (public logService: LogService) {}

  getUser () {
    this.logService.log('返回一条用户信息');
    return {name: 'bob', age: 23};
  }
}

import { Injectable } from '@angular/core';

@Injectable()
export class LogService {
  log (message) {
    console.log('log is: ' + message);
  }
}

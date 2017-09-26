import { Injectable } from '@angular/core';
import {LogService} from "./log.service";

@Injectable()
export class BetterLogService extends LogService {
  log (message) {
    console.log('better log is: ' + message);
  }
}

import {Injectable} from "@angular/core";
import {Body} from './body';

@Injectable()
export class Engine {
  constructor(private body: Body) {}

  start() {
    console.log('汽车开动了！ 5555');
  }
}

import {Engine} from "./engine";
import {Doors} from "./doors";
import {Body} from "./body";
import {Injectable} from "@angular/core";

@Injectable()
export class Car {

  // 隐式注入
  constructor(private engine: Engine, private doors: Doors, private body: Body) {}

  run() {
    this.engine.start();
  }
}

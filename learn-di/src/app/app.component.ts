import {Component, Injector, ReflectiveInjector} from '@angular/core';
import {Car} from "./car/car";
import {Body} from "./car/body";
import {Engine} from "./car/engine";
import {Doors} from "./car/doors";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']/*,
  providers: [Car,
    Engine, Doors, Body]*/
})
export class AppComponent {
  title = 'app';

  constructor() {
    // 显示的创建依赖注入的对象， 这样不好管理我们的注入器。
    // 默认依赖注入是隐式创建的。
    // const injector = ReflectiveInjector.resolveAndCreate([Car,
    //   Engine, Doors, Body]);
    // const car = injector.get(Car);
    // car.run();
  }
}

import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

/**
 通过实现Resolve<T>泛型接口创建守卫服务。该服务只有一个resolve()方法，用于执行数据预加载逻辑。
 该方法可以直接将数据返回，在异步情况下也可以通过Observable对象触发。
 其返回的任何数据（包括false）都将存放于配置项的data参数部分，如果没有预加载到期望的数据，只能通过代码跳转的方式来达到不激活目标配置项的目的。
 场景：
 1、我们有时候加载表单内容的时候，会出现页面已经出来了，但是数据还没有加载完成。
 */

/**
 在 app.routing.module.ts 中配置如下：
 const routes: Routes = [
 { path: 'home', component: HomeComponent },
 { path: 'contact', component: ContactComponent },
 { path: 'contact/:id', component: ContactComponent, children: [
   { path: '', component: SiqiComponent },
   { path: 'derry', component: DerryComponent}
 ], canActivate: [LoginGuard], canDeactivate: [UnsavedGuard], resolve: {
   content: ContentResolve
 }},
 { path: '**', component: NotFoundComponent }
 ];
 */

@Injectable()
export class ContentResolve implements Resolve<Contact> {

  constructor(private router: Router ) {

  }
  // 返回值，要么是泛型规定的类型，要么就导航走没有返回。
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const id: number = route.params['id'];

    if (id === 1) {
      // 模拟加载数据
      return new Contact(1, 'derry' );
    } else {
      // 通常出现在加载数据报错，那么需要把用户导航走
      this.router.navigate(['/home']);
    }
  }
}

export class Contact {
  constructor(public id: number, public name: string) {}
}

import { Injectable } from '@angular/core';
import { CanLoad, Route } from '@angular/router';

/**
 * 通过实现CanLoad接口创建守卫服务，当Url匹配到延迟加载的配置项，canload守卫就会对其拦截判断是否能加载。
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
export class CanLoadLazy implements CanLoad {
  canLoad(route: Route) {

    // route 参数为延迟加载配置项,path为当前url： async
    console.log(route.path);

    // 模拟状态
    const isCanLoad: boolean = Math.random() < 0.5;

    if (!isCanLoad) {
      console.log('不允许异步加载');
    }
    return isCanLoad;
  }
}

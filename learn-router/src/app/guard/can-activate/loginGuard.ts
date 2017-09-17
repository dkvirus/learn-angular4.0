import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';

/**
 功能：处理进入路由的情况
 参数：
 1、ActivatedRouteSnapshot，表示所要激活的目标配置项（被使用到的路由的信息）。
 2、RouterStateSnapshot，表示应用当前所处的路由状态，其包含了当前所需的所有配置项。
 通过实现CanActivate接口创建守卫服务。该接口只包含了一个canActivate()方法，最简单的情况，该方法返回true，则表示通过守卫。返回false时，表示不允许，则对守卫目标不允许激活 （不允许访问）。
 场景：
 1、防止我们的用户去访问一些他根本没有权限访问的内容。
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

export class LoginGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    // 获取配置项信息
    console.log(route.routeConfig);

    // 将所需的配置项以树形结构的方式组织起来
    console.log(state.root);

    // 当前登录用户有没有权限。发请求
    const loggedIn: boolean = Math.random() < 0.5;

    if ( !loggedIn) {
      console.log('暂未登录');
    }
    return loggedIn;
  }
}


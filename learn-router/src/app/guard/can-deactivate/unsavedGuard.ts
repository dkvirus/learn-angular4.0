import { NormalComponent } from '../../normal/normal.component';
import { CanDeactivate } from '@angular/router';

/**
 功能：处理离开路由的情况
 通过实现CanDeactivate接口创建守卫服务，跟CanActivate相比，该方法除了第一个参数为目标配置项对应组件的实例外，其余使用方式与canActivate()方法一样。
 场景：
 1、用户在输入写非常关键的信息，或者进行保存前的操作的时候，我们要避免不小心退出了当前的页面。
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

export class UnsavedGuard implements CanDeactivate<NormalComponent> {
  canDeactivate( component: NormalComponent) {
    console.log(component);
    // component 根据组件中的属性或方法判断。
    return window.confirm('暂未保存确定要离开吗？');
  }
}

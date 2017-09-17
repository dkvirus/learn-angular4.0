import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParamComponent } from './param.component';
import { PathComponent } from './path/path.component';
import { QueryComponent } from './query/query.component';
import { SubscribeComponent } from './subscribe/subscribe.component';

const routes: Routes = [
  { path: '', component: ParamComponent, children: [
    { path: '', component: PathComponent },
    { path: 'path', component: PathComponent },
    { path: 'query', component: QueryComponent },
    { path: 'subscribe', component: SubscribeComponent },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParamRoutingModule { }

import { NgModule } from '@angular/core';

import { ParamRoutingModule } from './param-routing.module';

import { ParamComponent } from './param.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { QueryComponent } from './query/query.component';
import { PathComponent } from './path/path.component';

@NgModule({
  declarations: [
    ParamComponent,
    SubscribeComponent,
    QueryComponent,
    PathComponent
  ],
  imports: [
    ParamRoutingModule
  ],
  providers: []
})
export class ParamModule { }

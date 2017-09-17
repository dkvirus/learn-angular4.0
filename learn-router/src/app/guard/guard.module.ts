import { NgModule } from '@angular/core';

import { GuardRoutingModule } from './guard-routing.module';

import { GuardComponent } from './guard.component';
import { CanActivateComponent } from './can-activate/can-activate.component';
import { CanLoadComponent } from './can-load/can-load.component';
import { ResolveComponent } from './resolve/resolve.component';
import { CanDeactivateComponent } from './can-deactivate/can-deactivate.component';
import { CanActivateChildComponent } from './can-activate-child/can-activate-child.component';

@NgModule({
  declarations: [
    GuardComponent,
    CanActivateComponent,
    CanLoadComponent,
    ResolveComponent,
    CanDeactivateComponent,
    CanActivateChildComponent
  ],
  imports: [
    GuardRoutingModule
  ],
  providers: []
})
export class GuardModule { }

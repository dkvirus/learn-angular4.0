import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuardComponent } from './guard.component';
import { CanActivateComponent } from './can-activate/can-activate.component';
import { CanLoadComponent } from './can-load/can-load.component';
import { ResolveComponent } from './resolve/resolve.component';
import { CanDeactivateComponent } from './can-deactivate/can-deactivate.component';
import { CanActivateChildComponent } from './can-activate-child/can-activate-child.component';

const routes: Routes = [
  { path: '', component: GuardComponent, children: [
    { path: '', component: CanActivateComponent },
    { path: 'canActivate', component: CanActivateComponent },
    { path: 'canActivateChild', component: CanActivateChildComponent },
    { path: 'canDeactivate', component: CanDeactivateComponent },
    { path: 'resolve', component: ResolveComponent },
    { path: 'canLoad', component: CanLoadComponent },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuardRoutingModule { }

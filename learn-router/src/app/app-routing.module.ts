import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NormalComponent } from './normal/normal.component';
import { RedirectComponent } from './redirect/redirect.component';
import { WildcardComponent } from './wildcard/wildcard.component';
import { ChildrenComponent } from './children/children.component';
import { ChildrenOneComponent } from './children-one/children-one.component';
import { ChildrenTwoComponent } from './children-two/children-two.component';
import { AssistComponent } from './assist/assist.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'normal', component: NormalComponent },
  { path: 'redirect', component: RedirectComponent },
  { path: 'wildcard', component: WildcardComponent },
  { path: 'children', component: ChildrenComponent, children: [
    // { path: '', redirectTo: '/children/one', pathMatch: 'full' },
    { path: '', component: ChildrenOneComponent },
    { path: 'one', component: ChildrenOneComponent },
    { path: 'two', component: ChildrenTwoComponent },
  ] },
  { path: 'assist', component: AssistComponent, outlet: 'aux' },
  { path: 'guard', loadChildren: 'app/guard/guard.module#GuardModule' },
  { path: 'async', loadChildren: 'app/async/async.module#AsyncModule' },
  { path: 'param', loadChildren: 'app/param/param.module#ParamModule' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

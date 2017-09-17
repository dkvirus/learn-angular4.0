import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaseConceptComponent } from './base-concept.component';
import { DefineComponent } from './define/define.component';
import { DefineModuleComponent } from './define-module/define-module.component';
import { WebComponentComponent } from './web-component/web-component.component';
import { CreateCompComponent } from './create-comp/create-comp.component';

const routes: Routes = [
  { path: '', component: BaseConceptComponent, children: [
    { path: '', component: DefineComponent },
    { path: 'define', component: DefineComponent },
    { path: 'define-module', component: DefineModuleComponent },
    { path: 'web-component', component: WebComponentComponent },
    { path: 'create-comp', component: CreateCompComponent },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseConceptRoutingModule { }

import { NgModule } from '@angular/core';

import { BaseConceptRoutingModule } from './base-concept-routing.module';

import { BaseConceptComponent } from './base-concept.component';
import { DefineComponent } from './define/define.component';
import { DefineModuleComponent } from './define-module/define-module.component';
import { WebComponentComponent } from './web-component/web-component.component';
import { CreateCompComponent } from './create-comp/create-comp.component';

@NgModule({
  declarations: [
    BaseConceptComponent,
    DefineComponent,
    DefineModuleComponent,
    WebComponentComponent,
    CreateCompComponent,
  ],
  imports: [
    BaseConceptRoutingModule
  ],
  providers: []
})
export class BaseConceptModule { }

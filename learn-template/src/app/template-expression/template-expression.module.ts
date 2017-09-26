import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateExpressionRoutingModule } from './template-expression-routing.module';

import { TemplateExpressionComponent } from './template-expression.component';
import { Userage1Component } from './userage1/userage1.component';
import { Userage2Component } from './userage2/userage2.component';
import { Userage3Component } from './userage3/userage3.component';
import { Userage4Component } from './userage4/userage4.component';

@NgModule({
  declarations: [
    TemplateExpressionComponent,
    Userage1Component,
    Userage2Component,
    Userage3Component,
    Userage4Component,
  ],
  imports: [
    TemplateExpressionRoutingModule,
    CommonModule
  ],
  providers: []
})
export class TemplateExpressionModule { }

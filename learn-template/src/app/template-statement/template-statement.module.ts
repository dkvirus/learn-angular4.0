import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateStatementRoutingModule } from './template-statement-routing.module';

import { TemplateStatementComponent } from './template-statement.component';
import { Userage1Component } from './userage1/userage1.component';
import { Userage2Component } from './userage2/userage2.component';
import { Userage3Component } from './userage3/userage3.component';

@NgModule({
  declarations: [
    TemplateStatementComponent,
    Userage1Component,
    Userage2Component,
    Userage3Component,
  ],
  imports: [
    TemplateStatementRoutingModule,
    CommonModule
  ],
  providers: []
})
export class TemplateStatementModule { }

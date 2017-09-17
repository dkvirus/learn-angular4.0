import { NgModule } from '@angular/core';

import { InteractionsRoutingModule } from './interactions-routing.module';

import { InteractionsComponent } from './interactions.component';
import { Userage1Component } from './userage1/userage1.component';
import { Userage2Component } from './userage2/userage2.component';
import { Userage3Component } from './userage3/userage3.component';
import { Userage4Component } from './userage4/userage4.component';

@NgModule({
  declarations: [
    InteractionsComponent,
    Userage1Component,
    Userage2Component,
    Userage3Component,
    Userage4Component,
  ],
  imports: [
    InteractionsRoutingModule
  ],
  providers: []
})
export class InteractionsModule { }

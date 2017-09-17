import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InteractionsComponent } from './interactions.component';
import { Userage1Component } from './userage1/userage1.component';
import { Userage2Component } from './userage2/userage2.component';
import { Userage3Component } from './userage3/userage3.component';
import { Userage4Component } from './userage4/userage4.component';

const routes: Routes = [
  { path: '', component: InteractionsComponent, children: [
    { path: '', component: Userage1Component },
    { path: 'userage1', component: Userage1Component },
    { path: 'userage2', component: Userage2Component },
    { path: 'userage3', component: Userage3Component },
    { path: 'userage4', component: Userage4Component },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InteractionsRoutingModule { }

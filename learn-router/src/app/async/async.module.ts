import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AsyncComponent } from './async/async.component';

const routes: Routes = [
  { path: '', component: AsyncComponent },
];

@NgModule({
  declarations: [
    AsyncComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  providers: []
})
export class AsyncModule { }

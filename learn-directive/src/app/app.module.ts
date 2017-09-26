import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MyColorDirective} from "./directive/myColor";
import {MyUnIfDirective} from "./directive/myUnIf";
import {FormsModule} from "@angular/forms";

@NgModule({
  // 三剑客 组件、自定义管道、自定义指令
  declarations: [
    AppComponent,
    MyColorDirective,
    MyUnIfDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

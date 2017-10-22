import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import {Http, HttpModule, JsonpModule, RequestOptions} from '@angular/http';
import { WebSocketComponent } from './web-socket/web-socket.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ParentComponent } from './shared/parent/parent.component';
import { ChildComponent } from './shared/child/child.component';
import {HttpInterceptorBackend} from "./interceptor/http-interceptor-backend";
import {HttpInterceptor} from "./interceptor/http-interceptor";
import {httpFactory} from "./interceptor/http-factory";
import {SharedService} from "./service/shared.service";

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    WebSocketComponent,
    RxjsComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule
  ],
  providers: [SharedService,
    HttpInterceptorBackend,
    HttpInterceptor,
    {provide: Http, useFactory: httpFactory, deps: [HttpInterceptorBackend, RequestOptions]}],
  bootstrap: [AppComponent]
})
export class AppModule { }

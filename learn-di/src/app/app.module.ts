import { BrowserModule } from '@angular/platform-browser';
import {InjectionToken, NgModule, OpaqueToken} from '@angular/core';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { Contact2Component } from './contact2/contact2.component';
import {ContactService} from "./service/contact.service";
import {LoggerService} from "./service/logger.service";
import {AnotherContactService} from "./service/another-contact.service";
import { DerryComponent } from './derry/derry.component';
import {Car} from "./car/car";
import {Doors} from "./car/doors";
import {Body} from './car/body';
import {Engine} from "./car/engine";
import {stringDistance} from "codelyzer/util/utils";


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    Contact2Component,
    DerryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [/*ContactService*/{ provide: ContactService,
    useFactory: (logger: LoggerService, appConfig) => {
      if ( appConfig.isDev) {
          return new ContactService(logger);
        } else {
          return new AnotherContactService(logger);
        }
    }, deps: [LoggerService, "APP_CONFIG"]}, LoggerService, { provide: 'NAME', useValue: "Derry"}, {
    provide: 'APP_CONFIG', useValue: {isDev: true}
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

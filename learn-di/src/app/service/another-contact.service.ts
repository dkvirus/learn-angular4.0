import { Injectable } from '@angular/core';
import {Contact, ContactService} from "./contact.service";
import {LoggerService} from "./logger.service";

@Injectable()
export class AnotherContactService implements ContactService {
  ;
  contacts: Contact[] = [
    new Contact('斯琪', '1017735262'),
    new Contact('song', '1519722778'),
    new Contact('star', '392958206')
  ]

  getContacts(): Contact[] {
    return this.contacts;
  }

  constructor(public logger: LoggerService) { }

}

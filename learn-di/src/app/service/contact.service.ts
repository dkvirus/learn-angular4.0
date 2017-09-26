import { Injectable } from '@angular/core';
import {LoggerService} from "./logger.service";

@Injectable()
export class ContactService {

  constructor(public logger: LoggerService) { }

  public contacts: Contact[] = [
    new Contact('Derry', '2714977534'),
    new Contact('阳阳', '1291718924'),
    new Contact('小天', '1528146396')
  ];

  getContacts(): Contact[] {
    this.logger.log("正在获取联系人");
    return this.contacts;
  }
}

export class Contact {
  constructor(
    public name: string,
    public qq: string
  ) {}
}

import { Component, OnInit } from '@angular/core';
import {ContactService} from "../service/contact.service";

export abstract class ContactP {
  name: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [{ provide: ContactP, useExisting: ContactComponent }]
})
export class ContactComponent implements OnInit {

  contacts: Array<{ name: string; qq: string }>;

  constructor(private contactService: ContactService) {
    // this.contacts = [
    //   {name: 'Derry老师', qq: '2714977534'},
    //   {name: '阳阳老师',  qq: '1291718924'},
    //   {name: '小天老师', qq: '1528146396'}
    // ];
    this.contacts = this.contactService.getContacts();
  }

  ngOnInit() {
  }

}



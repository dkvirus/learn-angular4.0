import {Component, Host, Inject, OnInit, Optional} from '@angular/core';
import {ContactService} from "../service/contact.service";
import {AnotherContactService} from "../service/another-contact.service";

@Component({
  selector: 'app-contact2',
  templateUrl: './contact2.component.html',
  styleUrls: ['./contact2.component.css']
})
export class Contact2Component implements OnInit {

  contacts: Array<{ name: string; qq: string }>;

  constructor(private contactService: ContactService, @Inject('NAME') name: string) {
    console.log(name);
    this.contacts = this.contactService.getContacts();
  }

  ngOnInit() {

  }

}

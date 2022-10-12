import { Component, OnInit } from '@angular/core';
import { IContact } from "../models/IContact";
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contactList:IContact[] = [];
  
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contactService.getAllContacts()
    .subscribe((response:IContact[])=>{
      this.contactList = response;
    })
  }

}

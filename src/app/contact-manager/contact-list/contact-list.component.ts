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
  filterBy:string = '';

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.getContacts();
  }

  getContacts() {
    this.contactService.getAllContacts()
      .subscribe((response: IContact[]) => {
        this.contactList = response;
      });
  }

  onDeleteContact(id){
    const confirmed = confirm(`Are you sure to delete this contact?`);
    if(confirmed){
      this.contactService.deleteContact(id)
      .subscribe((response)=>{
        alert(`Contact deleted successfully`);
        this.getContacts();
        console.log(" DELETE ",response);
      })
    }
  }
}

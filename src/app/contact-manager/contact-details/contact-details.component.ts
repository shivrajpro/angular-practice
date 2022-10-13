import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IContact } from '../models/IContact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  contactData: IContact;

  constructor(private contactService: ContactService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(" params", params);

      if (params.id) {
        this.contactService.getAllContacts()
          .subscribe((response: IContact[]) => {
            const contact = response.find((c) => c.id == params.id);
            if (contact)
              this.contactData = contact;
            else
              alert("Contact not found")
          })
      }
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from "../services/contact.service";
@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  contactForm:FormGroup;
  editMode:boolean = false;
  contactId: string = '';
  constructor(private route: ActivatedRoute, 
    private contactService:ContactService,
    private router:Router,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      console.log(" params",params);
      this.editMode = !!params.id;

      if(this.editMode){
        this.contactId = params.id
      }
    })

    this.contactForm = this.fb.group({
      name:[''],
      email:[''],
      photo:[''],
      mobile:[''],
      company: [''],
      title:[''],
      groupId: ['']
    })
  }

  onSave(){
    console.log('form',this.contactForm);

    if(this.editMode){
      this.contactService.updateContact(this.contactForm.value, this.contactId)
      .subscribe({
        next:(response)=>{
          alert("Contact updated successfully");
          console.log(" update response",response);
          this.contactForm.reset();
          this.gotoContactList();
        }
      })
    }else{
      this.contactService.saveContact(this.contactForm.value)
      .subscribe({
        next:(response)=>{
          alert("Contact saved successfully");
          console.log(" save response",response);
          this.contactForm.reset();
          this.gotoContactList();
        }
      })
    }
  }

  gotoContactList(){
    this.router.navigate(['/contacts/list']);
  }
}

import {Component, OnInit} from '@angular/core';
import {ContactService} from "../../core/Services/contact.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Contact} from "../../core/models/contact";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  allContacts: any[] = [];
  form: FormGroup = this.formBuilder.group({
    firstName: [null, [Validators.required, Validators.pattern('^[a-z\u0590-\u05fe]+$')]],
    lastName: [null, [Validators.required, Validators.pattern('^[a-z\u0590-\u05fe]+$')]],
    email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    phoneNum: [null, [Validators.pattern("^[0-9]*$")]]
  });

  constructor(private formBuilder: FormBuilder,
              private contactService: ContactService) {
  }

  ngOnInit(): void {
  }

  saveDetails(form: FormGroup) {
    const params = form.value as Contact;

    this.contactService.addNewContact(params).subscribe(success => {
      alert('contact saved')
    },
    error => {
      alert('failed. error:' + error)
    })
  }


  getAllContacts() {

    this.contactService.getAllContacts().subscribe(data => {
      this.allContacts = data;
    })
  }

}

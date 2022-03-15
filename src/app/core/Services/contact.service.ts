import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Contact} from "../models/contact";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) {
  }

  getAllContacts() {
    return this.http.get<any[]>('https://localhost:44303/contact/GetAllContacts');
  }


  addNewContact(newContact: Contact) {
    return this.http.post<boolean>('https://localhost:44303/contact/AddNewContact', newContact);
  }
}

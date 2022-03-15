import {Component, OnInit} from '@angular/core';
import {PersonalInfo} from "../../core/classes/personal-info";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  personalInfo: PersonalInfo[] =[];

  constructor() {
  }

  ngOnInit(): void {
    this.personalInfo = [
      new PersonalInfo('שם', 'אורנית אליהו','person_pin'),
      new PersonalInfo('דואר אלקטרוני', 'oranitel@gmail.com','alternate_email'),
      new PersonalInfo('שנת לידה', '1990','calendar_today'),
      new PersonalInfo('נייד', '052-5687204','phonelink_ring'),

    ];
  }

}

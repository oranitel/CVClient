import {Component, OnInit} from '@angular/core';
import {YearlyItem, YearlyItems} from "../../core/classes/yearly-items";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  education: YearlyItems[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.education = [
      new YearlyItems('השכלה נוספת', 'school',
        [new YearlyItem('2020', '',
          ['קורס בהקיף של 40 שעות ב-Angular מטעם Yaniv Arad Training Labs',
            'קורס בהקיף של 51 שעות ב-JAVA מטעם מרכז INT']),
          new YearlyItem('2011', '', ['קורס בטכנולוגית WPF מטעם מרכז ITC'])]),
      new YearlyItems('השכלה אקדמאית', 'domain',
        [new YearlyItem('2008', '2011',
          ['תואר ראשון: בוגר במדעים - .B.Sc בחוג למדעי המחשב של המרכז האקדמי לב, מכון לוסטיג. סיום בהצטיינות בממוצע 85.',
            'לימודי תעודת הוראה. הוראת המדעים.',
            'נציגת סטודנטיות מדעי המחשב והנדסת תוכנה.',
            'מתן תגבור בקורסי מדעי המחשב כגון: אלגברה לינארית, מערכות ספרתיות.',
            'מתן תרגול ותגבור תגבור בקורס אנגלית ברמות השונות.'])])
    ]
  }

}

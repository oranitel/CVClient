import {Component, OnInit} from '@angular/core';
import {YearlyItem, YearlyItems} from "../../core/classes/yearly-items";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experiences: YearlyItems[] = [];

  constructor() {
  }

  ngOnInit(): void {

    this.experiences = [
      new YearlyItems('ניסיון תעסוקתי', 'work_outline',
        [new YearlyItem('2016', 'היום',
          ['מתכנתת .NET בפרויקטים רוחביים בחברת "הפניקס" בתחום חיסכון ארוך טווח.',
            'פיתוח Full Stack – פיתוח Client ב-Angular ו-MVC. צד Server ב- C# פרויקט תקנות גביה, ממשק אחיד מסלקה וייפוי כוח.',
            'תכנון ויישום מערכות ותהליכים בתחומים רוחביים (Online + Batch)',
            'ניסיון בהתממשקות ואינטגרציה עם מערכות שונות (כגון: Bizztalk, BPM)',
            'עבודה עם בסיסי נתונים Oracle + Sql Server'
          ]),
          new YearlyItem('2012', '2016', [
            'מתכנתת COBOL בפרויקטים רוחביים בחברת "הפניקס" בתחום חא"ט.',
            'תכנון ויישום מערכות ותהליכים בתחומים רוחביים Online (Mosiacs) + Batch ',
            'ניסיון בהתממשקות ואינטגרציה עם מערכות שונות (כגון: Bizztalk, BPM)',
            'עבודה בסביבת Unix',
            'עבודה עם בסיס נתונים Oracle.'
          ])]),

      new YearlyItems('ארגז כלים', 'next_week',
        [new YearlyItem('שפות תכנות', '',
          ['Angular', 'C#', 'Java Script',
            'Type Script', 'HTML5', 'CSS3', 'SASS',
            'WPF', 'JQuary', 'C++', 'JAVA', 'COBOL', 'Unix'
          ]),
          new YearlyItem('טכניקות וכלים', '', [
            'Visual Studio', 'TFS', 'Git', 'Entity Framework', '.NET Core', 'REST API', 'ASP.NET',
            'MVC', 'Bootstrap', 'NPM', 'Agile', 'PLSQL Developer', 'Control-M',
            'SqlServer', 'PrimeNg', 'Jenkins', 'WebStorm', 'Teams'
          ])]),
    ]
  }

}

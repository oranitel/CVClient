import {Component, Input, OnInit} from '@angular/core';
import {YearlyItems} from "../../../core/classes/yearly-items";

@Component({
  selector: 'app-yearly-items-display',
  templateUrl: './yearly-items-display.component.html',
  styleUrls: ['./yearly-items-display.component.css']
})
export class YearlyItemsDisplayComponent implements OnInit {

  @Input() yearlyItems: YearlyItems[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}

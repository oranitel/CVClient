import {Component, OnInit} from '@angular/core';
import {MenuListItem} from "./core/classes/menu-list-item";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  menuListItems: MenuListItem[] = [
    {menuLinkText: 'דף הבית', menuIcon: 'home', isDisabled: false, routerLink: '/home'},
    {menuLinkText: 'הכשרה מקצועית', menuIcon: 'layers', isDisabled: false, routerLink: '/education'},
    {menuLinkText: 'ניסיון', menuIcon: 'work', isDisabled: false, routerLink: '/experience'},
    {menuLinkText: 'צור קשר', menuIcon: 'contacts', isDisabled: false, routerLink: '/contact'}
  ];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  clickMenuItem(item: MenuListItem) {
    // alert("AA" + item.menuLinkText)

    this.router.navigate([item.routerLink]);
  }
}

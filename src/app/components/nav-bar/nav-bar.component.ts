import { Component, OnInit } from '@angular/core';
import {MenuListItem} from "../../core/classes/menu-list-item";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  menuListItems: MenuListItem[] = [
    {menuLinkText: 'דף הבית', menuIcon: 'home', isDisabled: false, routerLink: '/home'},
    {menuLinkText: 'הכשרה מקצועית', menuIcon: 'layers', isDisabled: false, routerLink: '/education'},
    {menuLinkText: 'ניסיון', menuIcon: 'work', isDisabled: false, routerLink: '/experience'},
    {menuLinkText: 'צור קשר', menuIcon: 'contacts', isDisabled: false, routerLink: '/contact'}
  ];
  constructor() { }

  ngOnInit(): void {
  }


  clickMenuItem(item: MenuListItem) {

  }
}

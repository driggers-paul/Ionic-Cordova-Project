import { Component, OnInit } from '@angular/core';
import { SideMenuHandlerEmitter } from '../side-menu-handler';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss']
})
export class MenuButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    SideMenuHandlerEmitter.toggleAllowMenu(true);
  }

  public openMenu() {
    SideMenuHandlerEmitter.openMenu();
  }

}

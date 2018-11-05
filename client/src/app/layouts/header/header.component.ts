import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'nlg-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() public openedNavigation = new EventEmitter<boolean>();
  @Output() public openedSettings = new EventEmitter<boolean>();

  public title = 'Dev <3 Math';
  public toggle = false;
  public routes = [];

  constructor() {
  }

  ngOnInit() {
  }

  public openSettings() {
    this.openedSettings.emit();
  }
  public openNavigation() {
    this.openedNavigation.emit();
  }
}

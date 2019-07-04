import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'nlg-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {


  @Output() public toggleNavigation = new EventEmitter<boolean>();
  @Output() public toggleSettings = new EventEmitter<boolean>();
  // <nlg-head [state]="navigation.opened" (toggleNavigation)="navigation.toggle()" (toggleSettings)="settings.toggle()"></nlg-head>

  public title = 'NoLogig';
  public toggle = false;
  public routes = [];

  constructor() {
  }

  ngOnInit() {
  }

  public openSettings() {
    this.toggleSettings.emit();
  }
  public openNavigation() {
    this.toggleNavigation.emit();
  }
}

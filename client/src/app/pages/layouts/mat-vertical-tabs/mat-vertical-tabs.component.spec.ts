import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatVerticalTabsComponent } from './mat-vertical-tabs.component';

describe('MatVerticalTabsComponent', () => {
  let component: MatVerticalTabsComponent;
  let fixture: ComponentFixture<MatVerticalTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatVerticalTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatVerticalTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

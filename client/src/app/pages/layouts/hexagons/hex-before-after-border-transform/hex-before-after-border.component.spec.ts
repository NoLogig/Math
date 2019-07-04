import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HexBeforeAfterBorderComponent } from './hex-before-after-border.component';

describe('HexBeforeAfterBorderComponent', () => {
  let component: HexBeforeAfterBorderComponent;
  let fixture: ComponentFixture<HexBeforeAfterBorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HexBeforeAfterBorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HexBeforeAfterBorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

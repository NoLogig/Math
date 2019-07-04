import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HexBeforeAfterBorderArrowComponent } from './hex-before-after-border-arrow.component';

describe('HexBeforeAfterBorderArrowComponent', () => {
  let component: HexBeforeAfterBorderArrowComponent;
  let fixture: ComponentFixture<HexBeforeAfterBorderArrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HexBeforeAfterBorderArrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HexBeforeAfterBorderArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

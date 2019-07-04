import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasInitComponent } from './initializer.component';

describe('CanvasInitComponent', () => {
  let component: CanvasInitComponent;
  let fixture: ComponentFixture<CanvasInitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasInitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

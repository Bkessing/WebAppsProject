import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaratheonComponent } from './baratheon.component';

describe('BaratheonComponent', () => {
  let component: BaratheonComponent;
  let fixture: ComponentFixture<BaratheonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaratheonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaratheonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

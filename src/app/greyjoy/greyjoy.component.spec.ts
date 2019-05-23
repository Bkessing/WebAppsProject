import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreyjoyComponent } from './greyjoy.component';

describe('GreyjoyComponent', () => {
  let component: GreyjoyComponent;
  let fixture: ComponentFixture<GreyjoyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreyjoyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreyjoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

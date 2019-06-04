import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TyrellComponent } from './tyrell.component';

describe('TyrellComponent', () => {
  let component: TyrellComponent;
  let fixture: ComponentFixture<TyrellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TyrellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TyrellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

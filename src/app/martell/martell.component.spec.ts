import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MartellComponent } from './martell.component';

describe('MartellComponent', () => {
  let component: MartellComponent;
  let fixture: ComponentFixture<MartellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MartellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MartellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

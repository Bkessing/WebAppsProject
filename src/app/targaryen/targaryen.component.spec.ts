import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargaryenComponent } from './targaryen.component';

describe('TargaryenComponent', () => {
  let component: TargaryenComponent;
  let fixture: ComponentFixture<TargaryenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargaryenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargaryenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

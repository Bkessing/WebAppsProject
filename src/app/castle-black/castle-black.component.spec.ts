import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CastleBlackComponent } from './castle-black.component';

describe('CastleBlackComponent', () => {
  let component: CastleBlackComponent;
  let fixture: ComponentFixture<CastleBlackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CastleBlackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CastleBlackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

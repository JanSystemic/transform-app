import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrieviewCardComponent } from './prieview-card.component';

describe('PrieviewCardComponent', () => {
  let component: PrieviewCardComponent;
  let fixture: ComponentFixture<PrieviewCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrieviewCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrieviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

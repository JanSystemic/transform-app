import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatGuestionCardComponent } from './what-guestion-card.component';

describe('WhatGuestionCardComponent', () => {
  let component: WhatGuestionCardComponent;
  let fixture: ComponentFixture<WhatGuestionCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatGuestionCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatGuestionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

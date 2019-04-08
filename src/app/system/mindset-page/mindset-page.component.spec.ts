import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MindsetPageComponent } from './mindset-page.component';

describe('MindsetPageComponent', () => {
  let component: MindsetPageComponent;
  let fixture: ComponentFixture<MindsetPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MindsetPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MindsetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

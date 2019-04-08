import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusQuestionCardComponent } from './focus-question-card.component';

describe('FocusQuestionCardComponent', () => {
  let component: FocusQuestionCardComponent;
  let fixture: ComponentFixture<FocusQuestionCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FocusQuestionCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FocusQuestionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

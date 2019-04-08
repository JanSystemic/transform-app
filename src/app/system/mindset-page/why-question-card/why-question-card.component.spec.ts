import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyQuestionCardComponent } from './why-question-card.component';

describe('WhyQuestionCardComponent', () => {
  let component: WhyQuestionCardComponent;
  let fixture: ComponentFixture<WhyQuestionCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyQuestionCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyQuestionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

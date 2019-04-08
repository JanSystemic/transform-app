import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultAnswersComponent } from './result-answers.component';

describe('ResultAnswersComponent', () => {
  let component: ResultAnswersComponent;
  let fixture: ComponentFixture<ResultAnswersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultAnswersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

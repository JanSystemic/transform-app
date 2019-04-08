import { AnswersService } from './answers.service';
import { Component, OnInit } from '@angular/core';
import { QuestionsService } from './questions.service';

@Component({
  selector: 'mindset-page',
  templateUrl: './mindset-page.component.html',
  styleUrls: ['./mindset-page.component.css'],
})
export class MindsetPageComponent implements OnInit {
    myAnswers = [];
  constructor() { }

  ngOnInit() {
  }

}

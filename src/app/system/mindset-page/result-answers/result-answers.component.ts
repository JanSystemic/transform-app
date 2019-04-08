import { AnswersService } from './../answers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'result-answers',
  templateUrl: './result-answers.component.html',
  styleUrls: ['./result-answers.component.css']
})
export class ResultAnswersComponent implements OnInit {
  
  constructor( private service: AnswersService) { }
  answers = this.service.answers;
  questions = this.service.questions;
  ngOnInit() {
  }

}

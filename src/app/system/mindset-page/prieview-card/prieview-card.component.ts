import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnswersService } from '../answers.service';
import { QuestionsService } from 'app/system/mindset-page/questions.service';

@Component({
  selector: 'app-prieview-card',
  templateUrl: './prieview-card.component.html',
  styleUrls: ['./prieview-card.component.css']
})
export class PrieviewCardComponent implements OnInit {

  constructor(private router: Router, private service: AnswersService, private service2: QuestionsService) { }

  toStart(){
    this.service.answers = [];
    this.service.questions = [];
    this.router.navigate(['mindset/what']);
    console.log("test");

  }

  ngOnInit() {
  }

}

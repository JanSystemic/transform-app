import { AnswersService } from '../answers.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-what-guestion-card',
  templateUrl: './what-guestion-card.component.html',
  styleUrls: ['./what-guestion-card.component.css']
})
export class WhatGuestionCardComponent implements OnInit {
  whatAnswer: string = "";
  lastAnswer;
  constructor(private service: AnswersService, private router: Router) { }

  ngOnInit() {
  }

  addAnswer(){
    this.service.addAnswer(this.whatAnswer);
    this.service.addQuestion('Что надо сделать?');
    this.whatAnswer="";
    console.log(this.service.questions[0] + " " + this.service.answers[0]);
    this.lastAnswer = this.service.lastAnswer;
    console.log(this.lastAnswer);
    this.router.navigate(['mindset/why']);
  }

}

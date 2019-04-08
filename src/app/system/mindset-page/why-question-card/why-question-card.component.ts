import { Router } from '@angular/router';
import { AnswersService } from '../answers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-why-question-card',
  templateUrl: './why-question-card.component.html',
  styleUrls: ['./why-question-card.component.css']
})
export class WhyQuestionCardComponent implements OnInit {
  whyAnswer:string = "";
  lastAnswer:string = "";
  
  constructor(private service: AnswersService, private router: Router) { }
  //lastAnswer = this.service.lastAnswer;
  answers = this.service.answers;
  


  toNextWhy(){

    this.service.addAnswer(this.whyAnswer);
    this.whyAnswer="";
    this.service.addQuestion('Зачем надо ' + this.service.answers[this.service.answers.length - 2] + " ?");
    console.log(this.service.questions[this.service.questions.length - 1] + " " + this.service.answers[this.service.answers.length -1]);
    
  }

  toFocusQuest(){
      this.service.lastAnswer = this.service.answers[this.service.answers.length - 1];
      console.log(this.service.lastAnswer + "--test");
      this.router.navigate(['mindset/focus']);
      
  }

  ngOnInit() {
    
  }

}

import { Component, OnInit } from '@angular/core';
import { AnswersService } from '../answers.service';
import { QuestionsService } from '../questions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-focus-question-card',
  templateUrl: './focus-question-card.component.html',
  styleUrls: ['./focus-question-card.component.css']
})
export class FocusQuestionCardComponent implements OnInit {
      focusAnswers:string = "";
      mainAim = this.service.lastAnswer;
      count = 0;
      question = this.serviceQ.questions[0];
  constructor(private service: AnswersService, private serviceQ:QuestionsService, private router: Router) { }
     
 

  nextFocusQuest(){
       this.service.addQuestion(this.question + " " + this.mainAim + " ? ");
       this.question = this.serviceQ.questions[this.count + 1];
       this.count ++;
       this.service.addAnswer(this.focusAnswers);
       this.focusAnswers = "";
       this.mainAim = this.service.lastAnswer;
       
       console.log(this.mainAim + "--test");
      };

showAnswers(){
        this.router.navigate(['mindset/result']);
      }



  ngOnInit() {
    
  }

}

import { Injectable } from '@angular/core';

@Injectable()
export class AnswersService {
  
  answers =[];
  questions =[];
  //to get last element from array
  //lastAnswer = this.answers.slice(-1)[0];
  lastAnswer=" - ";
  

  constructor() {
    }
  
  

 addAnswer(answer: string){
   this.answers.push(
   answer  
   );
   //this.lastAnswer=this.answers[this.answers.length - 1];
   
 }
 addQuestion(question: string){
   this.questions.push(
   question
   );
 }




}
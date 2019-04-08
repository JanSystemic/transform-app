import { Component } from '@angular/core';
import { AnswersService } from './system/mindset-page/answers.service';
import { QuestionsService } from './system/mindset-page/questions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AnswersService, QuestionsService]
  
})
export class AppComponent {
  title = 'app works!';
}

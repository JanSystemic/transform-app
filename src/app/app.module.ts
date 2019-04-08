import { AppRoutingModule } from './app.routing.module';
import { QuestionsService } from './system/mindset-page/questions.service';
import { MdlLayoutComponent, MdlLayoutModule, MdlModule } from '@angular-mdl/core/components';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavigationLayoutComponent } from './system/shared/components/navigation-layout/navigation-layout.component';
import { MindsetPageComponent } from './system/mindset-page/mindset-page.component';
import { PrieviewCardComponent } from './system/mindset-page/prieview-card/prieview-card.component';
import { WhatGuestionCardComponent } from './system/mindset-page/what-guestion-card/what-guestion-card.component';
import { WhyQuestionCardComponent } from './system/mindset-page/why-question-card/why-question-card.component';
import { FocusQuestionCardComponent } from './system/mindset-page/focus-question-card/focus-question-card.component';
import { ResultAnswersComponent } from './system/mindset-page/result-answers/result-answers.component';
import { AnswersService } from './system/mindset-page/answers.service';
import { MindsetRoutingModule } from './system/mindset-page/mindset-routing.module';
import { WhyPageComponent } from './system/why-page/why-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationLayoutComponent,
    MindsetPageComponent,
    PrieviewCardComponent,
    WhatGuestionCardComponent,
    WhyQuestionCardComponent,
    FocusQuestionCardComponent,
    ResultAnswersComponent,
    WhyPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdlModule,
    MdlLayoutModule,
    AppRoutingModule,
    MindsetRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

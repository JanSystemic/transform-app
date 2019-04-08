import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WhatGuestionCardComponent } from './what-guestion-card/what-guestion-card.component';
import { PrieviewCardComponent } from './prieview-card/prieview-card.component';
import { WhyQuestionCardComponent } from './why-question-card/why-question-card.component';
import { FocusQuestionCardComponent } from './focus-question-card/focus-question-card.component';
import { ResultAnswersComponent } from './result-answers/result-answers.component';
import { MindsetPageComponent } from './mindset-page.component';
const routes: Routes = [
    {path: 'mindset', component: MindsetPageComponent, children: [
        {path: 'prieview', component: PrieviewCardComponent  },
        {path: 'what', component: WhatGuestionCardComponent  },
        {path: 'why', component: WhyQuestionCardComponent  },
        {path: 'focus', component: FocusQuestionCardComponent  },
        {path: 'result', component: ResultAnswersComponent  }
    ] }
]; 

@NgModule ({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]

})

export class MindsetRoutingModule {}
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MindsetPageComponent } from './system/mindset-page/mindset-page.component';
import { WhyPageComponent } from './system/why-page/why-page.component';

const routes: Routes = [
    {path: '', redirectTo: 'status', pathMatch: 'full' },
    {path: 'mindset', component:  MindsetPageComponent },
    {path: 'why-page', component:  WhyPageComponent }
];

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})

export class AppRoutingModule {}
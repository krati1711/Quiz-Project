import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinishComponent } from './finish/finish.component';
import { QuizComponent } from './quiz/quiz.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  {
    path: 'finish', component: FinishComponent
  },
  {
    path: 'quiz', component: QuizComponent
  },
  {
    path: '', component: StartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

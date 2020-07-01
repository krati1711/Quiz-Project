import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AddQuizComponent } from './add/add-quiz/add-quiz.component';
import { AddQuestionComponent } from './add/add-question/add-question.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'add-quiz' , component: AddQuizComponent},
  { path: 'add-question' , component: AddQuestionComponent},
  { path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

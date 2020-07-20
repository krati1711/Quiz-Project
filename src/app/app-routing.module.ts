import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AddQuizComponent } from './add/add-quiz/add-quiz.component';
import { AddQuestionComponent } from './add/add-question/add-question.component';
import { DeleteComponent } from './delete/delete.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'add-quiz' , component: AddQuizComponent, canActivate: [AuthGuard]},
  { path: 'add-question' , component: AddQuestionComponent, canActivate: [AuthGuard]},
  { path: 'delete' , component: DeleteComponent, canActivate: [AuthGuard]},
  { path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

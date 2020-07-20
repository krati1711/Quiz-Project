import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddQuizComponent } from './add/add-quiz/add-quiz.component';
import { AddQuestionComponent } from './add/add-question/add-question.component';
import { httpInterceptorProviders } from './http-interceptors/index';
import { DeleteComponent } from './delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddQuizComponent,
    AddQuestionComponent,
    DeleteComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    // Title,
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

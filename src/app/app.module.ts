import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FinishComponent } from './finish/finish.component';
import { QuizComponent } from './quiz/quiz.component';
import { StartComponent } from './start/start.component';
import { MyInterceptor } from './interceptor/MyInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    FinishComponent,
    QuizComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
     { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true, useValue: undefined}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

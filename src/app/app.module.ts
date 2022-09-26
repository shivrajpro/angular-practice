import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TdfComponent } from './tdf/tdf.component';
import { AppRoutingModule } from "./app-routing.module";
import { RouteService } from "./services/route.service";
import { WelcomeComponent } from './quiz-project/welcome/welcome.component';
import { QuestionComponent } from './quiz-project/question/question.component';

@NgModule({
  declarations: [
    AppComponent,
    TdfComponent,
    ReactiveFormsComponent,
    WelcomeComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [RouteService],
  bootstrap: [AppComponent]
})
export class AppModule { }

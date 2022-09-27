import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TdfComponent } from './tdf/tdf.component';
import { AppRoutingModule } from "./app-routing.module";
import { RouteService } from "./services/route.service";
import { WelcomeComponent } from './quiz-project/welcome/welcome.component';
import { QuestionComponent } from './quiz-project/question/question.component';
import { QuestionService } from './service/question.service'
import { HttpClientModule } from '@angular/common/http';
import { ChangeBgDirective } from './directives/change-bg.directive';
import { MaterialModule } from './material/material.module';
import { TodoComponent } from './todo-project/todo/todo.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    TdfComponent,
    ReactiveFormsComponent,
    WelcomeComponent,
    QuestionComponent,
    ChangeBgDirective,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [RouteService, QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }

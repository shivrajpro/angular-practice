import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './quiz-project/question/question.component';
import { WelcomeComponent } from './quiz-project/welcome/welcome.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TdfComponent } from './tdf/tdf.component';

const routes: Routes = [
  {
    path:'tdf',
    component:TdfComponent
  },
  {
    path:'reactive',
    component:ReactiveFormsComponent
  },
  {
    path:'',
    redirectTo:'welcome',
    pathMatch:'full'
  },
  {
    path:'welcome',
    component:WelcomeComponent
  },
  {
    path:'question',
    component:QuestionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

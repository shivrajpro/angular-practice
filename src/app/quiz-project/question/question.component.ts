import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  name:string = '';
  questionsList:any = [];
  currentQuestion:number = 0;
  counter:number = 60;
  points:number = 0;
  correctAnswer = 0;
  interval$;
  inCorrectAnswer = 0;
  progress:string = '0';
  isQuizCompleted:boolean = false;

constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.name = localStorage.getItem('name');

    this.getAllQuestions();
    this.startCounter();
  }

  getAllQuestions(){
    this.questionService.getQuestionsJson()
    .subscribe(response=>{
      this.questionsList = response.questions;
    })
  }


  nextQuestion(){
    this.currentQuestion++;
    this.resetCounter();
  }

  prevQuestion(){
    this.currentQuestion--;
  }

  answer(currentQueNo:number, option:any){
    if(currentQueNo === this.questionsList.length){
      this.isQuizCompleted = true;
      this.stopCounter();
    }
    if(option.correct){
      this.correctAnswer++
      this.points+=10;
    }else{
      this.points-=10;
      this.inCorrectAnswer++;
    }
    // if(this.currentQuestion !=  this.questionsList.length - 1){
    // }
    setTimeout(() => {
      this.nextQuestion();
      this.getProgressPercent();
    }, 1000);
  }

  startCounter(){
    this.interval$ = interval(1000)
    .subscribe((val)=>{
      this.counter--;
      if(this.counter === 0){
        this.currentQuestion++;
        this.counter = 60;
        this.points -= 10;
      }
    });

    setTimeout(() => {
      this.interval$.unsubscribe()
    }, 600000);
  }

  stopCounter(){
    this.interval$?.unsubscribe();
    this.counter = 0;
  }

  resetCounter(){
    this.stopCounter();
    this.counter = 60;
    this.startCounter();
  }

  resetQuiz(){
    this.resetCounter();
    this.getAllQuestions();
    this.currentQuestion = 0;
    this.points=0;
    this.counter=60;
    this.progress = '0';
    localStorage.clear();
  }

  getProgressPercent(){
    this.progress = (this.currentQuestion/this.questionsList.length)*100+'';
    return this.progress;
  }
}

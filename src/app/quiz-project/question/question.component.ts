import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/service/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  name:string = '';

constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.name = localStorage.getItem('name');

    this.getAllQuestions();
  }

  getAllQuestions(){
    this.questionService.getQuestionsJson()
    .subscribe(res=>{
      console.log(' res',res);
      
    })
  }
}

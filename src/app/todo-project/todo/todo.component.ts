import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ITask } from '../model/task';
 @Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoForm: FormGroup;
  tasks:ITask[] = [];
  inProgress: ITask[] = [];
  done: ITask[] = [];
  updateIndex:number = 0;
  editMode:boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      item:['', Validators.required]
    })

  }

  addTask(){
    this.tasks.push({
      description:this.todoForm.value.item,
      done:false
    })
    this.todoForm.reset();
  }

  drop(event: CdkDragDrop<ITask[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  deleteTask(i: number){
    this.tasks.splice(i, 1);
  }

  deleteInProgressTask(i:number){
    this.inProgress.splice(i, 1);
  }


  editTask(task:ITask, i:number){
    this.todoForm.setValue({
      item:task.description
    })

    this.editMode = true;
    this.updateIndex = i;
  }

  updateTask(){
    this.tasks[this.updateIndex].description = this.todoForm.value.item;
    this.tasks[this.updateIndex].done = false;

    this.editMode = false;
    this.updateIndex = null;

    this.todoForm.reset();
  }
}

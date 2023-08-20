import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/app/models/todoModel';
import { TodoService } from 'src/app/services/todo.service';
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {
  todoForm:FormGroup;

  constructor(private fb:FormBuilder,private todoSerivce :TodoService){
    this.todoForm=this.fb.group({
      title:['',Validators.required],
    })
  }
  addTodo(){
    if(this.todoForm.valid){
      const title = this.todoForm.value.title;
      const newTodo:Todo={
        id:Date.now(),
        title:title,
        done:false
      }
      this.todoSerivce.addTodo(newTodo);
      this.todoForm.reset();
    }
  }
}

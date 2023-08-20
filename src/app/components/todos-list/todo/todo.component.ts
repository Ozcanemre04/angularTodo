import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Todo } from 'src/app/models/todoModel';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
@Input()
todo:Todo;

update:boolean=false;
@ViewChild('todoInput')
todoInputValue:ElementRef<HTMLInputElement>;
constructor(private todoService:TodoService){}

deleteTodo():void{
 this.todoService.deleteTodo(this.todo.id);
}
updateTodo(){
  this.update = !this.update;
}
ConfirmUpdatedTodoValue(){
  this.todoService.updateTodo(this.todo.id,this.todoInputValue)
  this.update = !this.update;
}
todoDone(){
  this.todoService.markAsDone(this.todo)
}
}

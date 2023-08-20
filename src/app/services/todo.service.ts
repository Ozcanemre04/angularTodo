import { ElementRef, Injectable } from '@angular/core';
import { Todo } from '../models/todoModel';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos:Todo[]=[];

  constructor() { }
  getTodo():Todo[]{
    console.log(this.todos);
    
    return this.todos;

  }
  addTodo(todo:Todo):void{
     this.todos.push(todo)
  }
  deleteTodo(todoid:number):void{
    let index=this.todos.findIndex(x=>x.id === todoid)  
    if(index > -1){
      this.todos.splice(index,1);
     }
  }
  updateTodo(id:number,todo: ElementRef<HTMLInputElement>):void{
    const index = this.todos.findIndex(t=>t.id === id);
    if(index!== -1){
      this.todos[index].title=todo.nativeElement.value;
    }
  }
  markAsDone(todo:Todo){
    const find = this.todos.find(x=>x.id === todo.id)
    if(find){
      find.done =!find.done
    }
  }
}

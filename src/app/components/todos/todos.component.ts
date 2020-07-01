import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

import { Todo } from '../../module/Todos'
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})

export class TodosComponent implements OnInit {
  todos:Todo[];

  constructor(private  todoservice: TodoService ) { }

  ngOnInit(): void {
  this.todoservice.getTodos().subscribe(todos => {
    this.todos = todos;
  })
}

deleteTodo(todo: Todo) {
   // Remove from the UI
   return this.todos = this.todos.filter(x => x.id !== todo.id);
   // Removing from the server
   this.todoservice.deleteTodo(todo).subscribe();
}
  addTodo(todo:Todo) {
    this.todoservice.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    });
  }
}

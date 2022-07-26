import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css']
})
export class NewTodoComponent {
  todoText='';
  @Output() newTodoEvent = new EventEmitter<string>();
  addTodo(event: Event) {
    event.preventDefault();
    this.newTodoEvent.emit(this.todoText);
  }
}

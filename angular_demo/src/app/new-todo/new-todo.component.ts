import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css']
})
export class NewTodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  todoText='';
  @Output() newTodoEvent = new EventEmitter<string>();
  addTodo(event: Event) {
    console.log('clicked submit', { todoText: this.todoText })
    event.preventDefault();
    this.newTodoEvent.emit(this.todoText);
  }
}

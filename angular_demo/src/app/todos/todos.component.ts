import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor() { }

  @Input() todoList: string[] = [];

  ngOnInit(): void {
    const persistedTodoList = localStorage.getItem('todos');

    if (persistedTodoList) {
      this.todoList = JSON.parse(persistedTodoList);
    }
  }
}

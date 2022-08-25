import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TODO App';
  todoList: string[] = [];

  ngOnInit(): void {
    const persistedTodoList = localStorage.getItem('todos');

    if (persistedTodoList) {
      this.todoList = JSON.parse(persistedTodoList);
    }
  }

  addNewTodo(newTodo: string) {
    this.todoList.push(newTodo);
    localStorage.setItem('todos', JSON.stringify(this.todoList));
  }
}

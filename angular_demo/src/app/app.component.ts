import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo App';
  todoList: string[] = [];

  addNewTodo(newTodo: string) {
    this.todoList.push(newTodo);
    localStorage.setItem('todos', JSON.stringify(this.todoList));
  }
}

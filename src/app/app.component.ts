import { Component } from '@angular/core';
import {Todo} from './model/todo';
import {TodoService} from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Todo[];

  constructor(private readonly _todoService: TodoService) {
    this.todos = this._todoService.getAll();
  }
}

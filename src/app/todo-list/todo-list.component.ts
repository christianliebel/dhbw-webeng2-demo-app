import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {shareReplay, tap} from 'rxjs/operators';
import {Todo} from '../model/todo';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  public todos$: Observable<Todo[]>;

  constructor(private readonly _todoService: TodoService) {
    this.todos$ = this._todoService.getAll().pipe(
      tap(todos => console.log(todos)),
      shareReplay()
    );
  }
}

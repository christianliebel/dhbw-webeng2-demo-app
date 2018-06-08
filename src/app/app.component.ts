import { Component } from '@angular/core';
import { Todo } from './model/todo';
import { TodoService } from './todo.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos$: Observable<Todo[]>;

  constructor(private readonly _todoService: TodoService) {
    this.todos$ = this._todoService.getAll().pipe(
      tap(todos => console.log(todos))
    );
  }
}

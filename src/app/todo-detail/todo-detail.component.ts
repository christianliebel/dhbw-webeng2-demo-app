import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {finalize, map, pluck, switchMap, tap} from 'rxjs/operators';
import {Todo} from '../model/todo';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent {
  public loading = true;
  private todo$: Observable<Todo>;

  constructor(activatedRoute: ActivatedRoute, todoService: TodoService) {
    this.todo$ = activatedRoute.params.pipe(
      tap(() => this.loading = true),
      pluck('id'),
      map(stringId => +stringId),
      switchMap(id => todoService.get(id)),
      tap(() => this.loading = false),
    );
  }
}

import {Component, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {map, pluck, switchMap, tap} from 'rxjs/operators';
import {CameraService} from '../camera/camera.service';
import {Todo} from '../model/todo';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnDestroy {
  public loading = true;
  public todo$: Observable<Todo>;
  public image$: Observable<string>;
  private subscription: Subscription;

  constructor(activatedRoute: ActivatedRoute,
              private readonly todoService: TodoService,
              private readonly router: Router,
              private readonly cameraService: CameraService) {
    this.todo$ = activatedRoute.params.pipe(
      tap(() => this.loading = true),
      pluck('id'),
      map(stringId => +stringId),
      switchMap(id => todoService.get(id)),
      tap(() => this.loading = false),
    );
  }

  public onSubmit(todo: Todo): void {
    this.subscription = this.todoService.update(todo)
      .subscribe(() => this.router.navigate(['..']));
  }

  public ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  public takePicture(): void {
    this.image$ = this.cameraService.getPicture();
  }
}

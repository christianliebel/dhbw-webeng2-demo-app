import {Injectable} from '@angular/core';
import {Todo} from './model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public get(id: number): Todo {
    throw new Error('Not implemented');
  }

  public getAll(): Todo[] {
    return [
      { name: 'Wäsche waschen', id: 1, done: false },
      { name: 'Bügeln', id: 1, done: false },
      { name: 'Zimmer aufräumen', id: 1, done: false },
    ];
  }

  public create(id: number): Todo {
    throw new Error('Not implemented');
  }

  public update(id: number): void {
    throw new Error('Not implemented');
  }

  public delete(id: number): Todo {
    throw new Error('Not implemented');
  }
}

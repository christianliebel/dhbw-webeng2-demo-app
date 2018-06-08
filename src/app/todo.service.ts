import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';
import {Todo} from './model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private readonly url = environment.baseUrl;

  constructor(private readonly _httpClient: HttpClient) {
  }

  public get(id: number): Observable<Todo> {
    return this._httpClient.get<Todo>(`${this.url}/todos/${id}`);
  }

  public getAll(): Observable<Todo[]> {
    return this._httpClient.get<Todo[]>(`${this.url}/todos`);
  }

  public create(todo: Todo): Observable<Todo> {
    return this._httpClient.post<Todo>(`${this.url}/todos`, todo);
  }

  public update(todo: Todo): Observable<void> {
    return this._httpClient.put<void>(`${this.url}/todos/${todo.id}`, todo);
  }

  public delete(id: number): Observable<any> {
    return this._httpClient.delete<void>(`${this.url}/todos/${id}`);
  }
}

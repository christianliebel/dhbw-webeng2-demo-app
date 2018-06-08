import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Todo} from '../model/todo';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-todo-new',
  templateUrl: './todo-new.component.html',
  styleUrls: ['./todo-new.component.css']
})
export class TodoNewComponent implements OnInit {
  public formGroup: FormGroup;

  constructor(fb: FormBuilder, private readonly todoService: TodoService, private readonly router: Router) {
    this.formGroup = fb.group({
      done: [false],
      name: ['Neues Todo', Validators.minLength(5)]
    });
  }

  ngOnInit() {
  }

  public onSubmit(value: any): void {
    this.todoService.create(value as Todo).subscribe(() => this.router.navigate(['..']));
  }

}

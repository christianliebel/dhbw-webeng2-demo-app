import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { BlogpostComponent } from './blogpost/blogpost.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoNewComponent } from './todo-new/todo-new.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    BlogpostComponent,
    TodoListComponent,
    TodoDetailComponent,
    TodoNewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{
      path: 'todos',
      component: TodoListComponent
    }, {
      path: 'todos/new',
      component: TodoNewComponent
    }, {
      path: 'todos/:id',
      component: TodoDetailComponent
    }, {
      path: '',
      redirectTo: 'todos',
      pathMatch: 'full'
    }], {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

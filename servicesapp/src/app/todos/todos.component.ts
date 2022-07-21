import { Component, OnInit } from '@angular/core';
import { Todo } from '../types/todos.type';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styles: [
  ]
})
export class TodosComponent implements OnInit {

  //state
  todos!: Array<Todo>;
  loading: boolean = true;
  status: string = "loading....."

  //constructors must be used only for dependency injection
  constructor(private todoService: TodoService) { }

  async ngOnInit() {
    //state is initalized inside constructor
    //sync api call
    // this.todos = this.todoService.getTodos();
    //async api call using callbacks
    // this.todoService.getTodosUsingCallback((todos: Todo[]) => {
    //      this.todos = todos
    //      this.loading = !this.loading
    // })
    //Promise version
    // this.todoService.getTodosUsingPromise().then((todos: Todo[]) => {
    //   this.todos = todos
    //   this.loading = !this.loading
    // })
    this.todos = await this.todoService.getTodosUsingPromise()
    this.loading = !this.loading

  }

  ngOnDestroy(): void {
    //this method is called when component destroyed
  }

}

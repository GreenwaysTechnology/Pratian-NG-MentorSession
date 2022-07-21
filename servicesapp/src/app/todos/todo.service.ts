import { Injectable } from '@angular/core';
import { TODOS } from '../mock-data/todos.mock';
import { Todo } from '../types/todos.type';
import { LoggerService } from '../utils/logger.service';


@Injectable({
  providedIn: 'root' // we ask angualar create this service object by root injector
})
export class TodoService {
  //this service can have dependency of other services
  constructor(private logger: LoggerService) { }

  //biz apis :sync api
  public getTodos(): Array<Todo> {
    this.logger.log('...getTodos..')
    return TODOS
  }
  //async version using callbacks
  public getTodosUsingCallback(callback: Function) {
    //async using timers
    setTimeout(callback, 5000, TODOS);
  }
  //async version using Promises
  public getTodosUsingPromise(): Promise<Array<Todo>> {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 5000, TODOS);
    })
  }

}

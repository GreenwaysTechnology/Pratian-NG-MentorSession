import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GreeterstreamService {
  constructor() { }


  public getGreeter() {
    return 'Hello';
  }


  //api reactive api
  public getGreetStream(): Observable<string> {
    //stream
    return new Observable(subscriber => {
      subscriber.next("Hello")
      subscriber.next("Hai")
      subscriber.error(new Error('something went wrong'))
      subscriber.next("Welcome")
      subscriber.complete()
      subscriber.next('hhh')
    })
  }

  //using operators
  public getStream(): Observable<string> {
    return of('Hello', 'Hai', 'welcome', 'How are you')
  }



}

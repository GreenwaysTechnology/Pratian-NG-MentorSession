import { Injectable } from '@angular/core';
import { interval, map, Observable, range, tap,filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RangestreamService {

  constructor() { }
  //return range of numbers
  public getRange(): Observable<number> {
    return range(1, 20).pipe(
      tap(this.log),
      //tap(console.log),
      map(this.transform),
      filter(this.odd)
    )
  }
  private odd(item: any) {
    return item % 2 !== 0
  }
  private transform(x: number) {
    return x * 3
  }
  private log(item: any) {
    console.log('emitted item', item)
  }

  public getInterval() {
    return interval(1000)
  }
}

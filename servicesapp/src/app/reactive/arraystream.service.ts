import { Injectable } from '@angular/core';
import { from, of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArraystreamService {

  constructor() { }

  public getNumbersFromList(): Observable<number> {
    const list: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return from(list)
  }
  public getNumberList(): Observable<number[]> {
    const list: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return of(list)
  }

}

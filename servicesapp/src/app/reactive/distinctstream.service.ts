import { Injectable } from '@angular/core';
import { distinct, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DistinctstreamService {

  constructor() { }
  public getItems() {
    return of(1, 1, 2, 2, 2, 1, 2, 3, 4, 3, 2, 1).pipe(
      tap(i => console.log('item ', i)),
      distinct()
    )
  }
}

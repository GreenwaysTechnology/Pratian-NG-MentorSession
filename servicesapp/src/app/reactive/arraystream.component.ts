import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArraystreamService } from './arraystream.service';

@Component({
  selector: 'app-arraystream',
  templateUrl: './arraystream.component.html',
  styles: [
  ]
})
export class ArraystreamComponent implements OnInit {

  numList!: number[]
  numList$!:Observable<number[]>

  constructor(private listService: ArraystreamService) { }

  ngOnInit(): void {
    this.listService.getNumbersFromList().subscribe({
      next(data) {
        console.log(data)
      }
    })
    this.listService.getNumberList().subscribe({
      next: (data) => {
        this.numList = data
      }
    })
    //
    this.numList$ = this.listService.getNumberList();

  }

}

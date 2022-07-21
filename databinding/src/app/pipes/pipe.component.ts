import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styles: [
  ]
})
export class PipeComponent implements OnInit {
  name: string = "subramanian"
  stockValue: number = 10.7865
  date:Date = new Date()
  //object
  emp = {
    id: 1,
    name: 'Subramanian',
    city: 'Coimbatore'
  }

  constructor() { }

  ngOnInit(): void {
  }

}

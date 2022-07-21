import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parenteventemitter',
  templateUrl: './parent.component.html',
  styles: [
  ]
})
export class ParentComponent implements OnInit {

  data!: string;
  constructor() { }

  ngOnInit(): void {
  }
  receive(data: string) {
    this.data = data
  }

}

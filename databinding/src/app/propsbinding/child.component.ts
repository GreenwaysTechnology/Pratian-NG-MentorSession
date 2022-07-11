import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: [
  ]
})
export class ChildComponent implements OnInit {

  @Input()
  message!: string
  @Input()
  name!: string

  @Input('address') //@Input(propName)
  myaddress!: any

  @Input()
  skills!:string[]


  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeter',
  templateUrl: './greeter.component.html',
  styles: [
  ]
})
export class GreeterComponent implements OnInit {

  //state variable : primitive :string,number,boolean
  name: string = "Subramanian Murugan"
  message: string = "Hello"
  likes: number = 100;
  status: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attributebinding',
  templateUrl: './attributebinding.component.html',
  styles: [
  ]
})
export class AttributebindingComponent implements OnInit {

  //variable holding attribute value
  imgLocation = "favicon.ico"
  isEnabled: boolean = true
  isHidden: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

}

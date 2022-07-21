import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-childeventsemitter',
  templateUrl: './childeventsemitter.component.html',
  styles: [
  ]
})
export class ChildeventsemitterComponent implements OnInit {

  value: string = ""

  //custom event
  //onRequest Name of the custom event
  @Output()
  onRequest = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {

  }
  sendToParent() {
    this.onRequest.emit(this.value)
    this.value = ""
  }

}

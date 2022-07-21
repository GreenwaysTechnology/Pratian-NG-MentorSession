import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamiccss',
  templateUrl: './dynamiccss.component.html',
  styles: [
  ]
})
export class DynamiccssComponent implements OnInit {

  isColorChanged: boolean = false
  skills: string[] = ["Java", "JavaScript", "Python", "Angular"]

  constructor() { }

  ngOnInit(): void {
  }
  changeColor() {
    this.isColorChanged = !this.isColorChanged
  }
}

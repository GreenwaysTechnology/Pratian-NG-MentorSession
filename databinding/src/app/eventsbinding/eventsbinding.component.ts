import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventsbinding',
  templateUrl: './eventsbinding.component.html',
  styles: [
  ]
})
export class EventsbindingComponent implements OnInit {

  skills: string[] = ["Java", "Angular", "React", "DevOps", "Cloud", "C++"]
  selectedItem!: string
 
  //two way data binding
  value1:string =""
  value2:string =""
  value3:string =""
  value4:string =""


  constructor() { }

  ngOnInit(): void {
  }
  //event listener
  onClick() {
    alert('Button is clicked')
  }
  onSend(message: string) {
    alert(message)
  }
  onSelect(selectedItem: string) {
    //    alert(selectedItem)
    this.selectedItem = selectedItem
  }
  onInput(evt: any) {
    console.log(evt.target.value)
    this.value1 = evt.target.value
  }
 
}

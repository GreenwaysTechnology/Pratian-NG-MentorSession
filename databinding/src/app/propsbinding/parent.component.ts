import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styles: [
  ]
})
export class ParentComponent implements OnInit {

  name: string = "Subramanian"
  //send object
  address = {
    street: '10th street',
    doorno: '10/11A',
    area: 'Sakthi Nagar',
    city: 'Coimbatore'
  }
  //array
  skills: string[] = [
    "Javascript", "Java", "Angular", "React", "Cloud", "Devops"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

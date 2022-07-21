import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conditionalrendering',
  templateUrl: './conditionalrendering.component.html',
  styles: [
  ]
})
export class ConditionalrenderingComponent implements OnInit {
  isAvailable: boolean = false
  loading: boolean = true;
  status: string = "loading....."
  users: Array<any> = []
  feedback:string ='good'

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.users = [
        { id: 1, name: 'a1' },
        { id: 2, name: 'a2' },
        { id: 3, name: 'a3' },
      ]
      this.loading = !this.loading;
    }, 10000)
  }

}

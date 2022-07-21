import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GreeterstreamService } from './greeterstream.service';

@Component({
  selector: 'app-greeterstream',
  templateUrl: './greeterstream.component.html',
  styles: [
  ]
})
export class GreeterstreamComponent implements OnInit {

  //Subscrition object to cancel the stream
  subscription!: Subscription

  constructor(private greeterService: GreeterstreamService) { }

  ngOnInit(): void {
    //listen for
    this.subscription = this.greeterService.getGreetStream().subscribe({
      next: (data) => {
        console.log(data)
      },
      error: err => {
        console.log(err)
      },
      complete() {
        console.log('Stream Completed')
      }
    })

    this.greeterService.getStream().subscribe({
      next: (data) => {
        console.log(data)
      },
      error: err => {
        console.log(err)
      },
      complete() {
        console.log('Stream Completed')
      }
    })


  }
  //When the component is destroyed
  ngOnDestroy() {
    console.log('Stream has been unsubscribed')
    this.subscription.unsubscribe()
  }

}

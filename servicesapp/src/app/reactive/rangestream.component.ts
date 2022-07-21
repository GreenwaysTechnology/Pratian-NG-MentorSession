import { Component, OnInit } from '@angular/core';
import { RangestreamService } from './rangestream.service';

@Component({
  selector: 'app-rangestream',
  templateUrl: './rangestream.component.html',
  styles: [
  ]
})
export class RangestreamComponent implements OnInit {

  constructor(private rangeStreamService: RangestreamService) { }

  ngOnInit(): void {
    this.rangeStreamService.getRange().subscribe({
      next(data) {
        console.log(data)
      }
    })
    // let subscription = this.rangeStreamService.getInterval().subscribe({
    //   next(data) {
    //     console.log(data)
    //   }
    // })
    // //stop this interval stream after some time
    // setTimeout(() => {
    //   console.log('subscription stopped')
    //   subscription.unsubscribe()
    // }, 10000)

  }

}

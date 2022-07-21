import { Component, OnInit } from '@angular/core';
import { DistinctstreamService } from './distinctstream.service';

@Component({
  selector: 'app-distinctstream',
  templateUrl: './distinctstream.component.html',
  styles: [
  ]
})
export class DistinctstreamComponent implements OnInit {

  constructor(private distinctItems: DistinctstreamService) { }

  ngOnInit(): void {
    this.distinctItems.getItems().subscribe({
      next: (data) => {
        console.log(data)
      }
    })
  }

}

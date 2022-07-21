import { Component, OnInit } from '@angular/core';
import { Post } from './post.model';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styles: [
  ]
})
export class FormsComponent implements OnInit {

  post: any;
  categories: string[] = ['User Interface', 'MicroServices', 'Dev Ops', 'Cloud', 'NoSql']
  constructor() {
    this.post = new Post(1, 'Learn Angular', 'Misko', this.categories[0])
  }
  ngOnInit(): void {
  }

  //
  onSubmit() {
    console.log(this.post)
  }

}

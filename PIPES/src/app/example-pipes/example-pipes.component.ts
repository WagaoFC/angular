import { Component } from '@angular/core';

@Component({
  selector: 'app-example-pipes',
  templateUrl: './example-pipes.component.html',
  styleUrls: ['./example-pipes.component.scss']
})
export class ExamplePipesComponent {

  book: any = {
    title: 'Lorem Ips',
    rating: 4.54321,
    numberPages: 314,
    price: 44.90,
    releaseDate: new Date(2023, 7, 10),
    url: 'http://example.com'
  }
}

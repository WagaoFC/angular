import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})

export class FirstComponentComponent {
  title: string
  cursos: string[] = ['Java', 'Ext JS', 'Angular']

  constructor() {
    this.title = 'Title of Aplication'
  }
}

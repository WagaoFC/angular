import { CursosService } from './../../cursos/cursos.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})

export class FirstComponentComponent {
  title: string
  cursos: string[]

  constructor(
    private cursosService: CursosService
  ) {
    this.title = 'Title of Aplication'
    this.cursos = this.cursosService.getCursos()
  }
}

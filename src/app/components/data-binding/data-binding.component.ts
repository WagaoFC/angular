import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  url = 'http://google.com'
  cursoAngular = true
  urlImagem = 'http://lorempixel.com.br/500/400/?1'

  getValor() {
    return 1
  }

  curtirCurso() {
    return true
  }
}

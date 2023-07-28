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
  valorAtual = ''
  valorSalvo = ''
  isMouseOver = false
  nome = 'abc'
  nomeDoCurso = 'Angular'

  getValor() {
    return 1
  }

  curtirCurso() {
    return true
  }

  botaoClicado() {
    alert('mim dê')
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value
  }

  salvarValor(valor: any) {
    this.valorSalvo = valor
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver
  }
}

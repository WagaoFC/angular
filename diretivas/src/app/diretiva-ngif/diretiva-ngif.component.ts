import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.scss']
})
export class DiretivaNgifComponent {
  cursos = ["Angular 2"]
  mostrarCursos: boolean = false

  onMostrarCursos() {
    this.mostrarCursos = !this.mostrarCursos
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngfor',
  templateUrl: './diretiva-ngfor.component.html',
  styleUrls: ['./diretiva-ngfor.component.scss']
})
export class DiretivaNgforComponent implements OnInit {
  courses: string[] = ['Angular', 'Java', 'Phonegap']

  ngOnInit(): void {
    for (let i = 0; i < this.courses.length; i++) {
      let course = this.courses[i]
    }
  }
}

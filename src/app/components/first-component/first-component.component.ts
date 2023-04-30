import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit{
  name: string = 'WagaoFC'
  age: number = 28
  job: string = 'Developer'

  constructor(){}

  ngOnInit(): void {}

}

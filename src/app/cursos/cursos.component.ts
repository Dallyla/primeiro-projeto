import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;

  cursos: string[] = ['Java', 'Ext Js', 'Angular'];

  constructor() {
    this.nomePortal = 'http://dallyla.training';
  }

  ngOnInit(): void {
  }

}

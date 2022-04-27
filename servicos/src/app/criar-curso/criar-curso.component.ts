import { Component, OnInit } from '@angular/core';

import { CursoService } from '../cursos/curso.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css']
})
export class CriarCursoComponent implements OnInit {

  cursos: string[] = [];

  constructor(private cursoService: CursoService) { }

  ngOnInit(): void {
    this.cursos = this.cursoService.getCursos();
  }

  onAddCurso(curso: string)   {
    this.cursoService.addCurso(curso);
  }

}

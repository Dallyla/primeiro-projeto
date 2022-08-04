import { Component, OnInit } from '@angular/core';

import { CursoService } from './curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [CursoService]
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];
  //cursoService!: CursoService;


  constructor(private cursoService: CursoService) {
    //this.cursoService = _cursoService;
  }

  ngOnInit(): void {
    this.cursos = this.cursoService.getCursos()

    CursoService.criouNovoCurso.subscribe(

      curso => this.cursos.push(curso)

    );
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private cursos: string[] = ['Angular', 'React', 'NodeJS'];


  constructor() { }

  getCursos() {
    return this.cursos;

  }

  addCurso(curso:string){
    this.cursos.push(curso);
  }
}

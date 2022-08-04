import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from '../shared/log.service';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  emitirCursoCriado = new EventEmitter<string>();
  static criouNovoCurso = new EventEmitter<string>();

  private cursos: string[] = ['Angular', 'React', 'NodeJS'];


  constructor(private logService: LogService) {

  }

  getCursos() {
    this.logService.consoleLog('Obtendo Lista de Cursos')
    return this.cursos;
  }

  addCurso(curso:string){
    this.logService.consoleLog("Criando um novo curso " + curso);
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursoService.criouNovoCurso.emit(curso);
  }
}


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { CursoService } from './cursos/curso.service';
import { CriarCursoComponent } from './criar-curso/criar-curso.component';
import { CursosComponent } from './cursos/cursos.component';
import { LogService } from './shared/log.service';





@NgModule({
  declarations: [
    AppComponent,
    CriarCursoComponent,
    CursosComponent

  ],
  imports: [
    BrowserModule,

  ],
  providers: [CursoService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }

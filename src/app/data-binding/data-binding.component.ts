import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'Dallyla Website';
  cursoAngular: boolean = true;
  urlImagem = 'https://picsum.photos/id/237/200/300';

  valorInput: string = '';
  valorSalvo: string = '';

  isMouseOver: boolean = false;

  nome:string = 'abc';

  pessoa:any = {
    nome: 'def',
    idade: 20
  }

  nomeDoCurso: string = 'Angular';

  valorInicial: number = 15;

  getValor() {
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert('Botão clicado!');
  }

  onKeyUp(evento: KeyboardEvent){
    console.log(evento);
    this.valorInput = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: string){
    console.log(valor);
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento: any){
    console.log(evento.novoValor);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

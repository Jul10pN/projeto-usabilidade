import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lembrete-inserir',
  templateUrl: './lembrete-inserir.component.html',
  styleUrls: ['./lembrete-inserir.component.css']
})
export class LembreteInserirComponent implements OnInit {

  cadastro: string;
  realizacao: string;
  descricao: string;

  onAdicionarLembrete() {
    alert('Botão pressionado');
  }



  constructor() { }

  ngOnInit(): void {
  }

}

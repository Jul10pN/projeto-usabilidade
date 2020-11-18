import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-lembrete-inserir',
  templateUrl: './lembrete-inserir.component.html',
  styleUrls: ['./lembrete-inserir.component.css']
})
export class LembreteInserirComponent  {

  @Output() lembreteAdicionado = new EventEmitter();

  cadastro: string;
  realizacao: string;
  descricao: string;

  onAdicionarLembrete() {
    const lembrete = {
      cadastro: this.cadastro,
      realizacao: this.realizacao,
      descricao: this.descricao
    }

    this.lembreteAdicionado.emit(lembrete);


  }


}



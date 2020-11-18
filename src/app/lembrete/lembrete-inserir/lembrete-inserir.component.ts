import { Component, EventEmitter, Output } from '@angular/core';
import { Lembrete } from '../lembrete.model';






@Component({
  selector: 'app-lembrete-inserir',
  templateUrl: './lembrete-inserir.component.html',
  styleUrls: ['./lembrete-inserir.component.css']
})
export class LembreteInserirComponent  {

  @Output() lembreteAdicionado = new EventEmitter<Lembrete>();

  cadastro: string;
  realizacao: string;
  descricao: string;

  onAdicionarLembrete() {

    const lembrete: Lembrete = {
      cadastro: this.cadastro,
      realizacao: this.realizacao,
      descricao: this.descricao
    }

    this.lembreteAdicionado.emit(lembrete);

    this.cadastro = '';
    this.realizacao = '';
    this.descricao = '';


  }


}



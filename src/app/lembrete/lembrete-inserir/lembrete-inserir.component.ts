import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Lembrete } from '../lembrete.model';
import { LembreteService } from '../lembrete.service';

@Component({
  selector: 'app-lembrete-inserir',
  templateUrl: './lembrete-inserir.component.html',
  styleUrls: ['./lembrete-inserir.component.css']
})
export class LembreteInserirComponent  {

  constructor(public lembreteService: LembreteService){

  }

  onAdicionarLembrete(form: NgForm) {
    if(form.invalid) return;
    this.lembreteService.adicionarLembrete(
      form.value.cadastro,
     form.value.realizacao,
      form.value.descricao
    );
  }

}



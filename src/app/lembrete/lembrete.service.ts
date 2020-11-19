import { Injectable } from '@angular/core';
import { Lembrete} from './lembrete.model';
@Injectable({
  providedIn: 'root'
})
export class LembreteService {

  constructor() { }

  private lembretes: Lembrete [] = [
    {
      cadastro: '18/11/2020',
      realizacao: '25/12/2020',
      descricao: 'Natal'
    }
  ];

  getLembretes(): Lembrete []{
    return [...this.lembretes];
  }

  adicionarLembrete(cadastro: string, realizacao: string, descricao: string): void {
    const lembrete : Lembrete = {
      cadastro: cadastro,
      realizacao: realizacao,
      descricao: descricao
    };
    this.lembretes.push(lembrete);
  }



}
